import { addAddressUseCase } from "../src/use-case/addAddress.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";
import { createUserUseCase } from '../src/use-case/createUserAccount.js';

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

const emailErrado = addAddressUseCase(address, 'wrong@email.com');
console.log('Try to add an address using incorrect email, expects "False":\n', emailErrado);

const emailCorreto = addAddressUseCase(address, 'maria@exemple.com');
console.log('Try to add an address using correct email, expects "True":\n', emailCorreto);

const checkAddress = searchUserAccountByEmailUseCase('maria@exemple.com');
console.log('Search for user with added address, expects object with address not empty:\n', checkAddress);
