// import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import rethinkdb from 'rethinkdb';


const App = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  (async ()=>{
    const connection = await rethinkdb.connect({
      host: 'localhost',
      port: 28015,
      db: 'test',
    });
  
  // Chèn một bản ghi mới
  await rethinkdb.table('users').insert({
      username: 'ducduc',
      email: 'ducduc@gmail.com',
    }).run(connection);
  
  // Lấy tất cả bản ghi từ table 'users'
  const result = await rethinkdb.table('users').run(connection);
  
  // Lặp qua các bản ghi và in ra thông tin
  await result.eachAsync((row) => {
    console.log(row);
  });
  
  // Đóng kết nối sau khi thực hiện các truy vấn
  connection.close();
  })()

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal" mb={8}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default App;
