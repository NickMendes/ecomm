import { addAddressUseCase } from "../src/use-case/addAddress.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";
import { createUserUseCase, userList } from '../src/use-case/createUserAccount.js';

createUserUseCase('Maria', 'maria@exemple.com', 'maria123');
const address = {
  logradouro: 'Rua Um',
  numero: 100,
  complemento: 'NP',
  bairro: 'Qualquer',
  CEP: 30100000,
  cidade: 'São Paulo',
  UF: 'SP'
};

const addAddressWrongEmail = addAddressUseCase(address, 'wrong@email.com');
console.log('Try to add an address using incorrect email, expects "False":\n', addAddressWrongEmail);

console.log('Checking if userList didnt changed, expects object Maria without address:\n', userList);

const addAddressCorrect = addAddressUseCase(address, 'maria@exemple.com');
console.log('Try to add an address using correct email, expects "True":\n', addAddressCorrect);

const checkAddress = searchUserAccountByEmailUseCase('maria@exemple.com');
console.log('Search for user with added address, expects object with address not empty:\n', checkAddress);
