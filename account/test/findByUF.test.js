import { findByEstate } from "../src/use-case/findByUF.js";
import { createUserUseCase } from '../src/use-case/createUserAccount.js';

const address1 = {
  logradouro: 'Rua Um',
  numero: 100,
  complemento: 'NP',
  bairro: 'Qualquer',
  CEP: 30100000,
  cidade: 'São Paulo',
  UF: 'SP'
};
const address2 = {
  logradouro: 'Rua Um',
  numero: 100,
  complemento: 'NP',
  bairro: 'Qualquer',
  CEP: 30100000,
  cidade: 'Belo Horizonte',
  UF: 'MG'
};
const address3 = {
  logradouro: 'Rua Um',
  numero: 100,
  complemento: 'NP',
  bairro: 'Qualquer',
  CEP: 30100000,
  cidade: 'Belem',
  UF: 'PA'
};
const address4 = {
  logradouro: 'Rua Um',
  numero: 100,
  complemento: 'NP',
  bairro: 'Qualquer',
  CEP: 30100000,
  cidade: 'Brasilia',
  UF: 'DF'
};
createUserUseCase('Maria', 'maria@exemple.com', 'maria123', address1);
createUserUseCase('Jose', 'jose@exemple.com', '123456js', address2);
createUserUseCase('Fulana', 'fulana@example.com', '123fulana', address1);
createUserUseCase('Joelma', 'Joelma@calipso.com.br', 'sdds_chimbinha', address3);
createUserUseCase('Luiz Inácio', 'lula@presidente.com.br', 'janjaS2!!', address4);
createUserUseCase('Siclana', 'cici@example.com', '1234567890');

const searchSP = findByEstate('SP');
console.log('Search for UF "SP", expects array with 2 users:\n', searchSP);

const searchDF = findByEstate('DF');
console.log('Search for UF "DF", expects array with 1 users:\n', searchDF);
