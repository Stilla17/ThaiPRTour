import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChakraProvider, Box, Flex, Heading, Input, Button, Text,
  Stack, Card, CardBody, useToast, Icon, InputGroup, InputLeftElement
} from '@chakra-ui/react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import { FaUserShield } from 'react-icons/fa';
import auth from '../auth'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate(); 

  const loginHandler = async () => {
    if (!username || !password) {
      return toast({ title: 'Заполните все поля', status: 'warning', duration: 3000 });
    }
    
    setLoading(true);
    const role = await auth.login(username, password);
    setLoading(false);

    if (role && role !== 'error') {
      toast({ title: `Добро пожаловать, ${role}`, status: 'success', duration: 3000 });
      
      if (role === 'superadmin') {
        navigate('/superadmin'); 
      } else if (role === 'admin') {
        navigate('/admin'); 
      }
    } else if (role === 'error') {
       toast({ title: 'Ошибка подключения к API', status: 'error', duration: 3000 });
    } else {
      toast({ title: 'Неверный логин или пароль', status: 'error', duration: 3000 });
    }
  };

  return (
    <ChakraProvider>
      <Flex minH="100vh" align="center" justify="center" bg="gray.100" fontFamily="Inter, sans-serif">
        <Card w={{ base: '90%', md: '400px' }} shadow="xl" borderRadius="xl">
          <CardBody p={8}>
            <Flex justify="center" mb={6}>
              <Box bg="blue.600" p={3} borderRadius="full"><FaUserShield color="white" size={30} /></Box>
            </Flex>
            <Heading size="lg" textAlign="center" mb={2}>Вход в панель</Heading>
            <Text textAlign="center" color="gray.500" mb={8}>Введите данные для входа</Text>
            
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Icon as={FiUser} color="gray.400" />} />
                <Input 
                  placeholder="Логин" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && loginHandler()}
                />
              </InputGroup>
              
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Icon as={FiLock} color="gray.400" />} />
                <Input 
                  placeholder="Пароль" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && loginHandler()}
                />
              </InputGroup>
              
              <Button 
                leftIcon={<FiLogIn />} 
                colorScheme="blue" 
                size="lg" 
                isLoading={loading}
                onClick={loginHandler}
                mt={4}
              >
                Войти
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </ChakraProvider>
  );
};

export default Login;