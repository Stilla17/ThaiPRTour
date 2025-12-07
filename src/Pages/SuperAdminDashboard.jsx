import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChakraProvider, Box, Grid, Flex, Text, Button, Table, Thead, Tbody, Tr, Th, Td,
  Input, InputGroup, InputLeftElement, Badge, IconButton, useToast,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  ModalCloseButton, useDisclosure, Select, Switch, Container, Heading, 
  Card, CardBody, Stack, Divider, Tooltip, FormControl, FormLabel, List, ListItem, ListIcon,
  Icon, Spinner
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip as ChartTooltip, Legend, ArcElement
} from 'chart.js';
import { FiSearch, FiTrash2, FiEdit2, FiUserCheck, FiUserX, FiLock, FiPlus, FiLogOut, FiHome, FiUsers, FiShield, FiCheckCircle, FiXCircle, FiSave, FiAlertTriangle }
from 'react-icons/fi';
import { FaUserShield, FaPaw } from 'react-icons/fa'; 
import auth from '../auth'; 
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ChartTooltip, Legend, ArcElement);

const PRODUCT_API_URL = 'https://68d8c81290a75154f0d8ad21.mockapi.io/ee/f'; 
const USERS_API_URL = 'https://68c141a798c818a69401336f.mockapi.io/register'; 
const ADMINS_API_URL = 'https://68c141a798c818a69401336f.mockapi.io/logij'; 

const MASTER_PASSWORD = 'supersecretmasterpassword'; 

const api = {
  fetchAdmins: async () => (await axios.get(ADMINS_API_URL)).data,
  addAdmin: async (adminData) => (await axios.post(ADMINS_API_URL, adminData)).data,
  updateAdmin: async (adminId, adminData) => {
    const dataToSend = adminData.password ? adminData : { ...adminData, password: undefined };
    return (await axios.put(`${ADMINS_API_URL}/${adminId}`, dataToSend)).data;
  },
  deleteAdmin: async (adminId) => { await axios.delete(`${ADMINS_API_URL}/${adminId}`); },

  fetchUsers: async () => {
    const res = await axios.get(USERS_API_URL);
    return res.data.filter(u => u.role !== 'admin');
  },
  updateUser: async (userId, userData) => {
      return (await axios.put(`${USERS_API_URL}/${userId}`, userData)).data;
  },
  
  fetchAnimals: async () => {
    try {
      const res = await axios.get(PRODUCT_API_URL);
      return res.data.map(item => ({ 
        id: item.id, 
        title: item.title || item.name || 'Untitled Object', 
        description: item.description || 'No description',
        price: item.price || 0, 
        type: item.type || 'Sale',
      }));
    } catch (e) { console.error("Error fetching animals:", e); return []; }
  },
  addAnimal: async (animalData) => axios.post(PRODUCT_API_URL, animalData).then(res => res.data),
  updateAnimal: async (animalId, animalData) => axios.put(`${PRODUCT_API_URL}/${animalId}`, animalData).then(res => res.data),
  deleteAnimal: async (animalId) => axios.delete(`${PRODUCT_API_URL}/${animalId}`).then(res => res.data),
};

const StatCard = ({ title, value, icon, color, trend }) => (
  <motion.div whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
    <Box as={Card} boxShadow="lg" borderRadius="xl" borderTop="4px solid" borderColor={color}>
      <CardBody><Flex justifyContent="space-between" alignItems="center">
          <Box><Text color="gray.500" fontSize="sm" fontWeight="medium">{title}</Text>
            <Text fontSize="2xl" fontWeight="bold" mt={1}>{value}</Text>
            {trend && <Badge colorScheme="green" mt={2}>+{trend}% this week</Badge>}
          </Box>
          <Box p={3} bg={`${color.split('.')[0]}.100`} borderRadius="full" color={color}>{icon}</Box>
        </Flex></CardBody>
    </Box>
  </motion.div>
);

// PasswordCheckModal (Без изменений, использует MASTER_PASSWORD)
const PasswordCheckModal = ({ isOpen, onClose, onSuccess }) => {
    const [password, setPassword] = useState('');
    const toast = useToast();

    const checkPassword = () => {
        if (password === MASTER_PASSWORD) {
            onSuccess();
            onClose();
            setPassword('');
        } else {
            toast({ title: "Неверный мастер-пароль", status: "error" });
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader><Flex align="center"><FiAlertTriangle color="orange" size={24} mr={2}/> Требуется подтверждение</Flex></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text mb={4}>Для просмотра конфиденциальных данных введите мастер-пароль администратора:</Text>
                    <Input 
                        placeholder="Мастер-пароль" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={checkPassword}>Подтвердить</Button>
                    <Button variant="ghost" onClick={onClose}>Отмена</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

// EditUserModal (Без изменений - компонент формы)
const EditUserModal = ({ isOpen, onClose, user, onSave }) => {
    const [formData, setFormData] = useState(user || {});
    useEffect(() => { setFormData(user || {}); }, [user]);

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!user) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Редактировать Пользователя: {user.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Имя</FormLabel>
                            <Input value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </FormControl>
                        <FormControl display="flex" alignItems="center" justifyContent="space-between">
                            <FormLabel mb="0">Статус: {formData.status}</FormLabel>
                            <Switch 
                                isChecked={formData.status === 'active'} 
                                onChange={(e) => setFormData({...formData, status: e.target.checked ? 'active' : 'banned'})} 
                            />
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleSave} leftIcon={<FiSave />}>Сохранить</Button>
                    <Button onClick={onClose}>Отмена</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

// AddAdminModal (Без изменений - компонент формы)
const AddAdminModal = ({ isOpen, onClose, onAdd }) => { 
    const [formData, setFormData] = useState({ username: '', password: '', role: 'admin' });
    const handleAdd = () => {
        if (!formData.username || !formData.password) return alert("Заполните все поля");
        onAdd(formData);
        setFormData({ username: '', password: '', role: 'admin' });
        onClose();
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay /><ModalContent>
                <ModalHeader>Добавить нового Администратора</ModalHeader><ModalCloseButton />
                <ModalBody pb={6}><Stack spacing={4}>
                    <Input placeholder="Имя пользователя" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
                    <Input placeholder="Пароль" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    <Select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
                        <option value="admin">Admin</option>
                    </Select>
                </Stack></ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleAdd}>Добавить</Button>
                    <Button onClick={onClose}>Отмена</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

// EditAdminModal (Без изменений - компонент формы)
const EditAdminModal = ({ isOpen, onClose, admin, onSave }) => {
    const [formData, setFormData] = useState(admin || {});
    useEffect(() => { setFormData(admin || {}); }, [admin]);

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!admin) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Редактировать Администратора: {admin.username}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Имя пользователя</FormLabel>
                            <Input value={formData.username || ''} onChange={(e) => setFormData({...formData, username: e.target.value})} />
                        </FormControl>
                        {admin.role !== 'superadmin' && (
                            <FormControl>
                                <FormLabel>Роль</FormLabel>
                                <Select value={formData.role || 'admin'} onChange={(e) => setFormData({...formData, role: e.target.value})}>
                                    <option value="admin">Admin</option>
                                </Select>
                            </FormControl>
                        )}
                        <FormControl>
                            <FormLabel>Новый Пароль (опционально)</FormLabel>
                            <Input type="password" placeholder="Введите новый пароль" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                        </FormControl>
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleSave} leftIcon={<FiSave />}>Сохранить</Button>
                    <Button onClick={onClose}>Отмена</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

// AnimalModal (Без изменений - компонент формы)
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
                    <Button colorScheme="blue" mr={3} onClick={handleAction} leftIcon={isEdit ? <FiSave /> : <FiPlus />}>
                        {isEdit ? 'Сохранить' : 'Добавить'}
                    </Button>
                    <Button onClick={onClose}>Отмена</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

// --- SIDEBAR ---
const Sidebar = ({ activeView, setActiveView, role, onLogout }) => {
    const navItems = useMemo(() => ([
        { id: 'dashboard', label: 'Dashboard', icon: FiHome, color: 'blue', roles: ['superadmin', 'admin'] },
        { id: 'animals', label: 'Object Control', icon: FaPaw, color: 'orange', roles: ['superadmin', 'admin'] }, 
        { id: 'trash', label: 'Trash/Deleted Items', icon: FiTrash2, color: 'red', roles: ['superadmin', 'admin'] },
        { id: 'users', label: 'User Management', icon: FiUsers, color: 'green', roles: ['superadmin', 'admin'] }, 
        { id: 'admins', label: 'Admin Access', icon: FiShield, color: 'purple', roles: ['superadmin'] }, 
    ]), []);
    const roleConfig = useMemo(() => {
        switch (role) {
            case 'superadmin': return { icon: FaUserShield, color: 'red.600', text: 'Super Admin' };
            case 'admin': return { icon: FiUserCheck, color: 'blue.600', text: 'Admin' };
            default: return { icon: FiUserCheck, color: 'gray.500', text: 'User' };
        }
    }, [role]);

    return (
        <Box w="250px" bg="white" h="100vh" shadow="lg" p={4} position="sticky" top={0}>
            <Flex align="center" gap={3} mb={8} mt={2}>
                <Box bg={roleConfig.color} p={2} borderRadius="lg"><Icon as={roleConfig.icon} color="white" boxSize={6} /></Box>
                <Box>
                    <Heading size="md" color="gray.700">Admin Panel</Heading>
                    <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wide">{roleConfig.text}</Text>
                </Box>
            </Flex>
            <List spacing={2}>
                {navItems.filter(item => item.roles.includes(role)).map(item => (
                    <ListItem 
                        key={item.id} p={3} borderRadius="md" cursor="pointer"
                        bg={activeView === item.id ? `${item.color}.500` : 'transparent'}
                        color={activeView === item.id ? 'white' : 'gray.600'}
                        _hover={{ bg: activeView === item.id ? `${item.color}.600` : 'gray.100' }}
                        onClick={() => setActiveView(item.id)}
                    >
                        <ListIcon as={item.icon} color={activeView === item.id ? 'white' : `${item.color}.500`} mr={2} /> 
                        <Text as="span" fontWeight="medium">{item.label}</Text>
                    </ListItem>
                ))}
            </List>
            <Divider my={4} />
            <Flex align="center" p={3} borderRadius="md" color="gray.500" cursor="pointer" _hover={{ bg: 'red.100', color: 'red.600' }} onClick={onLogout}>
                <Icon as={FiLogOut} mr={2} boxSize={5} /><Text fontWeight="bold">LOG OUT</Text> 
            </Flex>
        </Box>
    );
};

// --- VIEWS (Представления) ---

const DashboardHome = ({ data, loading }) => {
    const totalUsers = data.users.length;
    const activeAdmins = data.admins.filter(a => a.active).length;
    const totalObjects = data.animals.length;

    const chartData = {
        labels: ['Users', 'Admins', 'Objects'],
        datasets: [{
            label: 'Total Items',
            data: [totalUsers, data.admins.length, totalObjects],
            backgroundColor: ['rgba(50, 200, 50, 0.6)', 'rgba(150, 50, 200, 0.6)', 'rgba(255, 150, 50, 0.6)'],
        }],
    };

    if (loading) return <Spinner size="xl" mt={10} />;

    return (
        <Box p={6}>
            <Heading size="xl" mb={6}>Dashboard</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} mb={8}>
                <StatCard title="Total Users" value={totalUsers} icon={<FiUsers size={24} />} color="green.500" trend={3.5} />
                <StatCard title="Active Admins" value={activeAdmins} icon={<FiShield size={24} />} color="purple.500" />
                <StatCard title="Objects on Site" value={totalObjects} icon={<FaPaw size={24} />} color="orange.500" trend={1.2} />
            </Grid>
            
            <Card boxShadow="lg" borderRadius="xl">
                <CardBody>
                    <Heading size="md" mb={4}>System Overview</Heading>
                    <Box h="300px">
                           <Bar data={chartData} options={{ maintainAspectRatio: false }} />
                    </Box>
                </CardBody>
            </Card>
        </Box>
    );
};

const UserManagement = ({ loading, filteredUsers, handleBanUser, handleEditUserClick, handleViewPassword, role }) => {
    if (loading) return <Spinner size="xl" mt={10} />;
    
    return (
        <Box p={6}>
            <Heading size="xl" mb={6}>User Management</Heading>
            <Table variant="simple" bg="white" shadow="md" borderRadius="md">
                <Thead><Tr><Th>ID</Th><Th>Name</Th><Th>Email</Th><Th>Status</Th><Th>Actions</Th></Tr></Thead>
                <Tbody>
                    {filteredUsers.map(user => (
                        <Tr key={user.id}>
                            <Td>{user.id}</Td>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td><Badge colorScheme={user.status === 'active' ? 'green' : 'red'}>{user.status}</Badge></Td>
                            <Td>
                                <Tooltip label="View Password (Requires Master Key)">
                                    <IconButton icon={<FiLock />} size="sm" mr={2} onClick={() => handleViewPassword(user)} />
                                </Tooltip>
                                <IconButton icon={<FiEdit2 />} size="sm" mr={2} onClick={() => handleEditUserClick(user)} />
                                <IconButton icon={user.status === 'active' ? <FiUserX /> : <FiUserCheck />} colorScheme={user.status === 'active' ? 'red' : 'green'} size="sm" onClick={() => handleBanUser(user)} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

const AdminManagement = ({ data, loading, handleAddAdmin, handleEditAdminClick, handleToggleAdminStatus, handleDeleteAdmin, role }) => { 
    if (role !== 'superadmin') {
        return <Box p={6}><Text color="red.500" fontSize="xl">Доступ к управлению администраторами запрещен.</Text></Box>;
    }
    if (loading) return <Spinner size="xl" mt={10} />;

    return (
        <Box p={6}>
            <Flex justifyContent="space-between" alignItems="center" mb={6}>
                <Heading size="xl">Admin Access Control</Heading>
                <Button colorScheme="purple" leftIcon={<FiPlus />} onClick={handleAddAdmin}>Add Admin</Button>
            </Flex>
            <Table variant="simple" bg="white" shadow="md" borderRadius="md">
                <Thead><Tr><Th>ID</Th><Th>Username</Th><Th>Role</Th><Th>Status</Th><Th>Actions</Th></Tr></Thead>
                <Tbody>
                    {data.admins.map(admin => (
                        <Tr key={admin.id}>
                            <Td>{admin.id}</Td>
                            <Td>{admin.username}</Td>
                            <Td><Badge colorScheme={admin.role === 'superadmin' ? 'red' : 'purple'}>{admin.role}</Badge></Td>
                            <Td>
                                <Switch 
                                    isChecked={admin.active} 
                                    onChange={() => handleToggleAdminStatus(admin)}
                                    isDisabled={admin.role === 'superadmin'}
                                />
                            </Td>
                            <Td>
                                <IconButton icon={<FiEdit2 />} size="sm" mr={2} onClick={() => handleEditAdminClick(admin)} />
                                <IconButton 
                                    icon={<FiTrash2 />} 
                                    colorScheme="red" 
                                    size="sm" 
                                    onClick={() => handleDeleteAdmin(admin.id)} 
                                    isDisabled={admin.role === 'superadmin'}
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

const AnimalControl = ({ animals, loading, role, onAddAnimalClick, onEditAnimalClick, onDeleteAnimal }) => {
    if (loading) return <Spinner size="xl" mt={10} />;
    
    return (
        <Box p={6}>
            <Flex justifyContent="space-between" alignItems="center" mb={6}>
                <Heading size="xl">Object Control</Heading>
                <Button colorScheme="orange" leftIcon={<FiPlus />} onClick={onAddAnimalClick}>Add Object</Button>
            </Flex>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                {animals.map(animal => (
                    <Card key={animal.id} shadow="md" borderRadius="xl">
                        <CardBody>
                            <Flex justifyContent="space-between" alignItems="flex-start" mb={2}>
                                <Heading size="md" color="gray.700">{animal.title}</Heading>
                                <Badge colorScheme={animal.type === 'Sale' ? 'green' : animal.type === 'Adoption' ? 'blue' : 'yellow'}>{animal.type}</Badge>
                            </Flex>
                            <Text fontSize="2xl" fontWeight="bold" color="orange.600">${animal.price}</Text>
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
        </Box>
    );
};

const TrashView = ({ deletedItems, onRestoreItem, onDeletePermanent, role }) => {
    return (
        <Box p={6}>
            <Heading size="xl" mb={6}>Trash/Deleted Items</Heading>
            <Table variant="simple" bg="white" shadow="md" borderRadius="md">
                <Thead><Tr><Th>Title</Th><Th>Type</Th><Th>Deleted At</Th><Th>Actions</Th></Tr></Thead>
                <Tbody>
                    {deletedItems.map((item, index) => (
                        <Tr key={index}>
                            <Td>{item.title}</Td>
                            <Td><Badge>{item.type}</Badge></Td>
                            <Td>{new Date(item.deletedAt).toLocaleTimeString()}</Td>
                            <Td>
                                <Button size="sm" mr={2} onClick={() => onRestoreItem(item)} colorScheme="green" leftIcon={<FiCheckCircle />}>Restore (Local)</Button>
                                {role === 'superadmin' && (
                                    <Button size="sm" onClick={() => onDeletePermanent(item)} colorScheme="red" leftIcon={<FiXCircle />}>Delete Perm. (Local)</Button>
                                )}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};


// =========================================================================
//                       🚀 MAIN COMPONENT & LOGIC
// =========================================================================
const SuperAdminDashboard = () => {
    const navigate = useNavigate();
    const toast = useToast();
    
    const [role, setRole] = useState(auth.getRole() || 'guest'); 
    const [activeView, setActiveView] = useState('dashboard');
    const [data, setData] = useState({ admins: [], users: [], animals: [] }); 
    const [deletedItems, setDeletedItems] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    
    // Modals & Selection States
    const [adminToEdit, setAdminToEdit] = useState(null); 
    const [userToEdit, setUserToEdit] = useState(null);
    const [selectedUserForPass, setSelectedUserForPass] = useState(null);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    
    const { isOpen: isPassOpen, onOpen: onPassOpen, onClose: onPassClose } = useDisclosure();
    const { isOpen: isUserEditOpen, onOpen: onUserEditOpen, onClose: onUserEditClose } = useDisclosure();
    const { isOpen: isAdminEditOpen, onOpen: onAdminEditOpen, onClose: onAdminEditClose } = useDisclosure(); 
    const { isOpen: isAddAdminOpen, onOpen: onAddAdminOpen, onClose: onAddAdminClose } = useDisclosure(); 
    const { isOpen: isAnimalModalOpen, onOpen: onAnimalModalOpen, onClose: onAnimalModalClose } = useDisclosure();
    const [isAnimalEditMode, setIsAnimalEditMode] = useState(false);


    // --- ПРОВЕРКА АУТЕНТИФИКАЦИИ И ЗАГРУЗКА ДАННЫХ ---
    const loadAllData = async () => { 
        if (!auth.getRole()) { navigate('/'); return; }

        setLoading(true);
        try {
            const [admins, users, animals] = await Promise.all([
                api.fetchAdmins(), api.fetchUsers(), api.fetchAnimals() 
            ]);
            
            const initialAnimalIds = new Set(deletedItems.filter(item => item.type === 'animal').map(item => item.originalId));
            const filteredAnimals = animals.filter(animal => !initialAnimalIds.has(animal.id));

            setData({ admins, users, animals: filteredAnimals }); 
        } catch (error) { 
             toast({ title: "Ошибка загрузки API", description: "Не удалось получить все данные.", status: "error" });
        } finally { setLoading(false); }
    };

    useEffect(() => { 
        if (!auth.getRole()) {
            toast({ title: "Сессия истекла", description: "Пожалуйста, войдите снова.", status: "error" });
            navigate('/');
        } else {
            loadAllData(); 
        }
    }, [navigate]); 

    // --- LOGOUT ФУНКЦИЯ ---
    const handleLogout = useCallback(() => {
        if (window.confirm("Вы уверены, что хотите выйти?")) {
            auth.logout(); 
            toast({ title: "Выход выполнен", description: "Перенаправление на страницу входа.", status: "success" });
            navigate('/'); 
        }
    }, [toast, navigate]);
    
    // --- ADMIN ACTIONS (CRUD) ---
    const handleAddAdmin = async (newAdminData) => {
        if (role !== 'superadmin') return toast({ title: "Доступ запрещен", status: "warning" });
        try {
            const newAdmin = await api.addAdmin({ ...newAdminData, active: true });
            setData(prev => ({ ...prev, admins: [...prev.admins, newAdmin] }));
            toast({ title: "Админ добавлен и сохранен в API!", status: "success" });
        } catch (e) { toast({ title: "Ошибка сохранения админа", description: e.message, status: "error" }); }
    };

    const handleEditAdminClick = (admin) => { setAdminToEdit(admin); onAdminEditOpen(); };

    const handleSaveAdmin = async (updatedAdmin) => {
        if (role !== 'superadmin' && updatedAdmin.role === 'superadmin') return toast({ title: "Изменение SuperAdmin запрещено", status: "warning" });
        try {
            const result = await api.updateAdmin(updatedAdmin.id, updatedAdmin);
            setData(prev => ({ ...prev, admins: prev.admins.map(a => a.id === result.id ? result : a) }));
            toast({ title: "Данные админа обновлены (API Success)", status: "success" }); 
        } catch (e) { toast({ title: "Ошибка обновления админа", description: e.message, status: "error" }); }
        onAdminEditClose();
    };
    
    const handleDeleteAdmin = async (id) => {
        if (role !== 'superadmin') return toast({ title: "Доступ запрещен", status: "warning" });
        if (window.confirm("Удалить администратора?")) {
            try {
                await api.deleteAdmin(id);
                setData(prev => ({ ...prev, admins: prev.admins.filter(a => a.id !== id) }));
                toast({ title: "Администратор удален из API", status: "info" });
            } catch (e) { toast({ title: "Ошибка удаления админа", description: e.message, status: "error" }); }
        }
    };
    
    // ✅ ИСПОЛЬЗУЕТ API
    const handleToggleAdminStatus = async (admin) => {
        if (role !== 'superadmin' || admin.role === 'superadmin') return toast({ title: "Ошибка", description: "Нельзя менять статус SuperAdmin.", status: "error" });
        
        const newStatus = !admin.active;
        try {
            const result = await api.updateAdmin(admin.id, { active: newStatus });
            setData(prev => ({ ...prev, admins: prev.admins.map(a => a.id === result.id ? { ...a, active: result.active } : a) }));
            toast({ title: `Статус админа изменен: ${newStatus ? 'Active' : 'Inactive'}`, status: "info" });
        } catch (e) { toast({ title: "Ошибка обновления статуса админа", description: e.message, status: "error" }); }
    };

    // --- USER ACTIONS ---
    const handleViewPassword = (user) => { setSelectedUserForPass(user); onPassOpen(); };
    const handlePassSuccess = () => { toast({ title: `Пароль пользователя ${selectedUserForPass.name}: ${selectedUserForPass.password}`, status: "success", duration: 8000 }); setSelectedUserForPass(null); };
    const handleEditUserClick = (user) => { setUserToEdit(user); onUserEditOpen(); };
    
    // ✅ ИСПОЛЬЗУЕТ API
    const handleSaveUser = async (updatedUser) => {
        try {
            // Обновляем все поля пользователя, кроме id
            const result = await api.updateUser(updatedUser.id, updatedUser);
            setData(prev => ({ ...prev, users: prev.users.map(u => u.id === result.id ? result : u) }));
            toast({ title: "Данные пользователя обновлены (API Success)", status: "success" });
        } catch (e) { toast({ title: "Ошибка сохранения пользователя", description: e.message, status: "error" }); }
    };
    
    // ✅ ИСПОЛЬЗУЕТ API
    const handleBanUser = async (user) => {
        const newStatus = user.status === 'active' ? 'banned' : 'active';
        try {
            const result = await api.updateUser(user.id, { status: newStatus }); 
            
            // Поскольку MockAPI может не вернуть "status", обновляем локально, полагаясь на логику:
            setData(prev => ({ ...prev, users: prev.users.map(u => u.id === user.id ? { ...u, status: newStatus } : u) }));
            toast({ title: `Пользователь ${newStatus} (API Success)`, status: newStatus === 'banned' ? 'red' : 'green' });
        } catch (e) { toast({ title: "Ошибка смены статуса пользователя", description: e.message, status: "error" }); }
    };

    // --- OBJECT/PRODUCT ACTIONS (CRUD) ---
    const handleAddAnimalClick = () => { setSelectedAnimal(null); setIsAnimalEditMode(false); onAnimalModalOpen(); };
    const handleEditAnimalClick = (animal) => { setSelectedAnimal(animal); setIsAnimalEditMode(true); onAnimalModalOpen(); };
    
    const handleSaveAnimal = async (updatedAnimal) => {
        if (role !== 'superadmin' && role !== 'admin') return;
        try {
            const result = await api.updateAnimal(updatedAnimal.id, updatedAnimal);
            setData(prev => ({ ...prev, animals: prev.animals.map(a => a.id === result.id ? result : a) }));
            toast({ title: "Object Updated (API Success)", status: "success" });
        } catch (e) { toast({ title: "Update Failed", description: e.message, status: "error" }); }
        onAnimalModalClose();
    };

    const handleAddAnimal = async (newAnimalData) => {
        if (role !== 'superadmin' && role !== 'admin') return;
        try {
            const result = await api.addAnimal(newAnimalData);
            setData(prev => ({ ...prev, animals: [...prev.animals, result] }));
            toast({ title: "Object Added (API Success)", status: "success" });
        } catch (e) { toast({ title: "Add Failed", description: e.message, status: "error" }); }
        onAnimalModalClose();
    };
    
    const onDeleteAnimal = async (animal) => {
        if (role !== 'superadmin' && role !== 'admin') return;
        if (window.confirm(`Вы уверены, что хотите удалить ${animal.title} и поместить в корзину?`)) {
            try {
                // Добавление в локальную корзину
                setDeletedItems(prev => [...prev, {
                    originalId: animal.id, title: animal.title, context: `Price: $${animal.price}, Type: ${animal.type}`,
                    type: 'animal', deletedAt: new Date().toISOString(), originalData: animal,
                }]);
                // Удаление из основного списка
                setData(prev => ({ ...prev, animals: prev.animals.filter(a => a.id !== animal.id) }));
                toast({ title: "Object Moved to Trash (Local)", status: "warning" });
            } catch (e) { toast({ title: "Deletion Failed", description: `API Error: ${e.message}.`, status: "error" }); }
        }
    };
    
    // Локальное восстановление
    const onRestoreItem = (item) => {
        if (item.type === 'animal') {
            setData(prev => ({ ...prev, animals: [...prev.animals, item.originalData] }));
        }
        setDeletedItems(prev => prev.filter(i => i.originalId !== item.originalId));
        toast({ title: "Элемент восстановлен (Локально)", status: "success" });
    };

    const onDeletePermanent = (item) => {
        if (role !== 'superadmin') return toast({ title: "Доступ запрещен", status: "warning" });
        if (window.confirm("Удалить навсегда? Это действие необратимо.")) {
            setDeletedItems(prev => prev.filter(i => i.originalId !== item.originalId));
            toast({ title: "Удалено навсегда (Локально)", status: "error" });
        }
    };


    const filteredUsers = useMemo(() => {
        return data.users.filter(u => (u.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || (u.email?.toLowerCase() || '').includes(searchQuery.toLowerCase()));
    }, [data.users, searchQuery]);

    const renderContent = () => {
        switch (activeView) {
            case 'dashboard': return <DashboardHome data={data} loading={loading} />;
            case 'animals': return <AnimalControl animals={data.animals} loading={loading} role={role} onAddAnimalClick={handleAddAnimalClick} onEditAnimalClick={handleEditAnimalClick} onDeleteAnimal={onDeleteAnimal} />;
            case 'trash': return <TrashView deletedItems={deletedItems} onRestoreItem={onRestoreItem} onDeletePermanent={onDeletePermanent} role={role} />;
            case 'users': return <UserManagement loading={loading} filteredUsers={filteredUsers} role={role} handleBanUser={handleBanUser} handleEditUserClick={handleEditUserClick} handleViewPassword={handleViewPassword} />;
            case 'admins': return <AdminManagement data={data} loading={loading} role={role} handleAddAdmin={onAddAdminOpen} handleEditAdminClick={handleEditAdminClick} handleToggleAdminStatus={handleToggleAdminStatus} handleDeleteAdmin={handleDeleteAdmin} />;
            default: return <DashboardHome data={data} loading={loading} />;
        }
    };

    if (role === 'guest') {
        return <ChakraProvider><Flex minH="100vh" align="center" justify="center"><Text>Загрузка...</Text></Flex></ChakraProvider>;
    }
    
    return (
        <ChakraProvider>
            <Flex minH="100vh" bg="gray.50">
                <Sidebar activeView={activeView} setActiveView={setActiveView} role={role} onLogout={handleLogout} />
                <Box flex="1" p={0} overflowX="hidden">
                    <Flex justify="flex-end" p={4} bg="white" shadow="sm">
                        <InputGroup maxW="300px" size="sm">
                            <InputLeftElement pointerEvents="none"><FiSearch /></InputLeftElement>
                            <Input placeholder="Global Search" borderRadius="full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        </InputGroup>
                    </Flex>
                    <Container maxW="container.xl" py={4}>
                        {renderContent()}
                    </Container>
                </Box>
            </Flex>

            {/* ВСЕ МОДАЛЬНЫЕ ОКНА */}
            <PasswordCheckModal isOpen={isPassOpen} onClose={onPassClose} onSuccess={handlePassSuccess} />
            <EditUserModal isOpen={isUserEditOpen} onClose={onUserEditClose} user={userToEdit} onSave={handleSaveUser} />
            
            <AddAdminModal isOpen={isAddAdminOpen} onClose={onAddAdminClose} onAdd={handleAddAdmin} />
            <EditAdminModal isOpen={isAdminEditOpen} onClose={onAdminEditClose} admin={adminToEdit} onSave={handleSaveAdmin} />
            
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

export default SuperAdminDashboard;