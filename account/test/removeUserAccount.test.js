import { removeUserUseCase } from "../src/use-case/removeUserAccount.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";
import { createUserUseCase, userList } from '../src/use-case/createUserAccount.js';

createUserUseCase('Maria', 'maria@exemple.com', 'maria123');
createUserUseCase('Jose', 'jose@exemple.com', '123456js');
const address = {
  logradouro: 'Rua Um',
  numero: 100,
  complemento: 'NP',
  bairro: 'Qualquer',
  CEP: 30100000,
  cidade: 'São Paulo',
  UF: 'SP'
};
createUserUseCase('Fulana', 'fulana@example.com', '123fulana', address);

const removeErrado = removeUserUseCase('wrong@email.com');
console.log('Try to remove user using incorrect email, expects "False":\n', removeErrado);

const removeCorreto = removeUserUseCase('maria@exemple.com');
console.log('Try to remove user with correct email, expects "True":\n', removeCorreto);

const checkRemoval = searchUserAccountByEmailUseCase('maria@exemple.com');
console.log('Seearch for deleted user, expects Error Mgs:\n', checkRemoval);

console.log('Check userList, expect array with 2 users/objects:\n', userList);