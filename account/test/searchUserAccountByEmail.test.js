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

const emailCorreto = searchUserAccountByEmailUseCase('maria@exemple.com');
const emailErrado = searchUserAccountByEmailUseCase('nao@email.com');

console.log('Search for correct email, expects object with user:\n', emailCorreto);
console.log('Search for incorrect email, expect Error Msg:\n', emailErrado);