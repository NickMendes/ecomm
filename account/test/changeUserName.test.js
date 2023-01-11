import { changeUserNameUseCase } from "../src/use-case/changeUserName.js";
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

const mudaNomeErrado = changeUserNameUseCase('wrong@email.com', 'naoImporta');
console.log('Try to change name using incorrect email, expects "False":\n', mudaNomeErrado);

const mudaNomeCorreto = changeUserNameUseCase('jose@exemple.com', 'Zeca');
console.log('Try to change name using correct email, expects "True":\n', mudaNomeCorreto);

const checkChange = searchUserAccountByEmailUseCase('jose@exemple.com');
console.log('Search for user with changed name, expects object with new user name:\n', checkChange);