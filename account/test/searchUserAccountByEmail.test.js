import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";
import { createUserUseCase } from '../src/use-case/createUserAccount.js';

createUserUseCase('Maria', 'maria@exemple.com', 'maria123');

const searchCorrectEmail = searchUserAccountByEmailUseCase('maria@exemple.com');
const searchWrongEmail = searchUserAccountByEmailUseCase('nao@email.com');

console.log('Search for correct email, expects object with user:\n', searchCorrectEmail);
console.log('Search for incorrect email, expect Error Msg:\n', searchWrongEmail);