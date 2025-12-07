import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChakraProvider, Box, Grid, Flex, Text, Button, Badge, IconButton, useToast,
  Spinner, Container, Heading, Card, CardBody, List, ListItem, ListIcon, Icon, Divider,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, 
  useDisclosure, Input, Select, FormControl, FormLabel, Stack, Tooltip
} from '@chakra-ui/react';
import {
  FiLogOut, FiHome, FiUsers, FiTrash2, FiEdit2, FiPlus, FiSave
} from 'react-icons/fi';
import { FaPaw } from 'react-icons/fa'; 
import axios from 'axios';
import auth from '../auth'; // ПРОВЕРЬТЕ ПУТЬ

// --- КОНФИГУРАЦИЯ И API ---
const PRODUCT_API_URL = 'https://68d8c81290a75154f0d8ad21.mockapi.io/ee/f'; 

const api = {
  fetchAnimals: async () => {
    try {
      const res = await axios.get(PRODUCT_API_URL);
      return res.data.slice(0, 10).map(item => ({ 
        id: item.id, title: item.name || item.title || 'Untitled Object', description: item.description || 'No description',
        price: item.price || Math.floor(Math.random() * 1000) + 50, type: item.type || ['Sale', 'Adoption', 'Rent'][Math.floor(Math.random() * 3)],
      }));
    } catch (e) { return []; }
  },
  addAnimal: async (animalData) => axios.post(PRODUCT_API_URL, animalData).then(res => res.data),
  updateAnimal: async (animalId, animalData) => axios.put(`${PRODUCT_API_URL}/${animalId}`, animalData).then(res => res.data),
  // В реальном проекте, удаление здесь должно архивировать, а не удалять из API
  deleteAnimal: async (animalId) => axios.delete(`${PRODUCT_API_URL}/${animalId}`).then(res => res.data),
};

// --- МОДАЛЬНОЕ ОКНО для объектов (AnimalModal) ---
// Взято из SuperAdminDashboard.jsx
const AnimalModal = ({ isOpen, onClose, animal, onSave, onAdd, isEdit }) => {
    const initialData = isEdit ? animal : { title: '', description: '', price: 0, type: 'Sale' };
    const [formData, setFormData] = useState(initialData);
    useEffect(() => { setFormData(isEdit ? animal : { title: '', description: '', price: 0, type: 'Sale' }); }, [animal, isEdit]);

    const handleAction = () => {
        if (!formData.title || !formData.price) return alert("Заполните название и цену");
        if (isEdit) {
            onSave(formData);
        } else {
            onAdd(formData);
        }
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{isEdit ? `Редактировать: ${formData.title}` : 'Добавить Новый Объект'}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Stack spacing={4}>
                        <FormControl><FormLabel>Название</FormLabel>
                            <Input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
                        </FormControl>
                        <FormControl><FormLabel>Цена</FormLabel>
                            <Input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} />
                        </FormControl>
                        <FormControl><FormLabel>Тип сделки</FormLabel>
                            <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                                <option value="Sale">Продажа</option>
                                <option value="Adoption">Принятие</option>
                                <option value="Rent">Аренда</option>
                            </Select>
                        </FormControl>
                        <FormControl><FormLabel>Описание</FormLabel>
                            <Input value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} />
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="orange" mr={3} onClick={handleAction} leftIcon={isEdit ? <FiSave /> : <FiPlus />}>
                        {isEdit ? 'Сохранить' : 'Добавить'}
                    </Button>
                    <Button onClick={onClose}>Отмена</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};


// --- VIEW: Управление Объектами (Object Control) ---
const AnimalControl = ({ animals, loading, onAddAnimalClick, onEditAnimalClick, onDeleteAnimal }) => {
    if (loading) return <Flex justify="center" align="center" h="200px"><Spinner size="xl" /></Flex>;
    
    return (
        <Box>
            <Flex justifyContent="space-between" alignItems="center" mb={6}>
                <Heading size="xl">Управление Объектами</Heading>
                <Button colorScheme="orange" leftIcon={<FaPaw />} onClick={onAddAnimalClick}>
                    Добавить Объект
                </Button>
            </Flex>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                {animals.map(animal => (
                    <Card key={animal.id} shadow="md" borderRadius="xl">
                        <CardBody>
                            <Flex justifyContent="space-between" alignItems="flex-start" mb={2}>
                                <Heading size="md" color="gray.700">{animal.title}</Heading>
                                <Badge colorScheme={animal.type === 'Sale' ? 'green' : animal.type === 'Adoption' ? 'blue' : 'yellow'}>{animal.type}</Badge>
                            </Flex>
                            <Text fontSize="2xl" fontWeight="bold" color="orange.600" mb={3}>${animal.price}</Text>
                            <Text fontSize="sm" color="gray.500" noOfLines={2}>{animal.description}</Text>
                            <Divider my={4} />
                            <Flex justifyContent="flex-end">
                                <IconButton icon={<FiEdit2 />} size="sm" mr={2} onClick={() => onEditAnimalClick(animal)} />
                                <IconButton icon={<FiTrash2 />} colorScheme="red" size="sm" onClick={() => onDeleteAnimal(animal)} />
                            </Flex>
                        </CardBody>
                    </Card>
                ))}
            </Grid>
            {animals.length === 0 && <Text textAlign="center" mt={8} color="gray.500">Объекты не найдены.</Text>}
        </Box>
    );
};

// --- ОСНОВНОЙ КОМПОНЕНТ ПАНЕЛИ АДМИНА ---
const AdminDashboard = () => {
    const navigate = useNavigate();
    const toast = useToast();
    
    const [role, setRole] = useState(auth.getRole() || 'guest');
    const [animals, setAnimals] = useState([]); 
    const [loading, setLoading] = useState(true);
    
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const { isOpen: isAnimalModalOpen, onOpen: onAnimalModalOpen, onClose: onAnimalModalClose } = useDisclosure();
    const [isAnimalEditMode, setIsAnimalEditMode] = useState(false);

    const loadAnimals = async () => { 
        if (role === 'guest') { navigate('/login'); return; }

        setLoading(true);
        try {
            const fetchedAnimals = await api.fetchAnimals();
            setAnimals(fetchedAnimals); 
        } catch (error) { toast({ title: "Ошибка API", description: "Не удалось загрузить объекты.", status: "error" }); } finally { setLoading(false); }
    };

    useEffect(() => { loadAnimals(); }, [role]); 

    const handleLogout = useCallback(() => {
        auth.logout(); 
        toast({ title: "Выход выполнен", status: "success" });
        navigate('/login'); 
    }, [toast, navigate]);

    const handleAddAnimalClick = () => { setSelectedAnimal(null); setIsAnimalEditMode(false); onAnimalModalOpen(); };
    const handleEditAnimalClick = (animal) => { setSelectedAnimal(animal); setIsAnimalEditMode(true); onAnimalModalOpen(); };
    
    const handleSaveAnimal = async (updatedAnimal) => {
        try {
            const result = await api.updateAnimal(updatedAnimal.id, updatedAnimal);
            setAnimals(prev => prev.map(a => a.id === result.id ? result : a));
            toast({ title: "Объект обновлен!", status: "success" });
        } catch (e) { toast({ title: "Ошибка обновления", status: "error" }); }
    };

    const handleAddAnimal = async (newAnimalData) => {
        try {
            const result = await api.addAnimal(newAnimalData);
            setAnimals(prev => [...prev, result]);
            toast({ title: "Объект добавлен!", status: "success" });
        } catch (e) { toast({ title: "Ошибка добавления", status: "error" }); }
    };
    
    const onDeleteAnimal = async (animal) => {
        if (window.confirm(`Вы уверены, что хотите удалить ${animal.title}?`)) {
            try {
                await api.deleteAnimal(animal.id);
                setAnimals(prev => prev.filter(a => a.id !== animal.id));
                toast({ title: "Объект удален!", status: "warning" });
            } catch (e) { toast({ title: "Ошибка удаления", description: "Объект не удален из MockAPI.", status: "error" }); }
        }
    };

    return (
        <ChakraProvider>
            <Flex minH="100vh" bg="gray.50">
                <Box w="250px" bg="white" h="100vh" shadow="lg" p={4} position="sticky" top={0}>
                    <Flex align="center" gap={3} mb={8} mt={2}>
                        <Box bg="blue.600" p={2} borderRadius="lg"><Icon as={FiHome} color="white" boxSize={6} /></Box>
                        <Box><Heading size="md" color="gray.700">Admin Panel</Heading>
                            <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wide">{role}</Text>
                        </Box>
                    </Flex>
                    <List spacing={2}>
                        <ListItem p={3} borderRadius="md" bg="blue.500" color="white">
                            <ListIcon as={FaPaw} mr={2} color="white" /> Управление Объектами
                        </ListItem>
                    </List>
                    <Divider my={4} />
                    <Flex align="center" p={3} borderRadius="md" color="gray.500" cursor="pointer" _hover={{ bg: 'red.100', color: 'red.600' }} onClick={handleLogout}>
                        <Icon as={FiLogOut} mr={2} boxSize={5} /><Text fontWeight="bold">LOG OUT</Text> 
                    </Flex>
                </Box>
                <Box flex="1" p={4} overflowX="hidden">
                    <Container maxW="container.xl" py={4}>
                        <AnimalControl 
                            animals={animals} 
                            loading={loading} 
                            onAddAnimalClick={handleAddAnimalClick} 
                            onEditAnimalClick={handleEditAnimalClick} 
                            onDeleteAnimal={onDeleteAnimal} 
                        />
                    </Container>
                </Box>
            </Flex>

            <AnimalModal 
                isOpen={isAnimalModalOpen} 
                onClose={onAnimalModalClose} 
                animal={selectedAnimal} 
                onSave={handleSaveAnimal} 
                onAdd={handleAddAnimal} 
                isEdit={isAnimalEditMode} 
            />
        </ChakraProvider>
    );
};

export default AdminDashboard;