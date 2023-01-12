import { createUserUseCase, userList } from '../src/use-case/createUserAccount.js';

//Before Each
const user1 = createUserUseCase('Maria', 'maria@exemple.com', 'maria123');
const user2 = createUserUseCase('Jose', 'jose@exemple.com', '123456js');
const address = {
  logradouro: 'Rua Um',
  numero: 100,
  complemento: 'NP',
  bairro: 'Qualquer',
  CEP: 30100000,
  cidade: 'São Paulo',
  UF: 'SP'
};
const user3 = createUserUseCase('Fulana', 'fulana@example.com', '123fulana', address)

console.log('Insert new user, expect user object as response:\n', user1);
console.log('Insert new user, expect user object as response:\n', user2);
console.log('Insert new user, expect user object as response:\n', user3);
console.log('Check userList, expect array with 3 users/objects:\n', userList);
