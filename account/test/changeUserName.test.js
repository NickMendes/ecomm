import { changeUserNameUseCase } from "../src/use-case/changeUserName.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";
import { createUserUseCase, userList } from '../src/use-case/createUserAccount.js';

createUserUseCase('Maria', 'maria@exemple.com', 'maria123');

const changeWrongEmail = changeUserNameUseCase('wrong@email.com', 'naoImporta');
console.log('Try to change name using incorrect email, expects "False":\n', changeWrongEmail);

console.log('Checking if userList didnt changed, expects object with name Maria:\n', userList);

const changeCorrectEmail = changeUserNameUseCase('maria@exemple.com', 'Mariana');
console.log('Try to change name using correct email, expects "True":\n', changeCorrectEmail);

const checkChangedUser = searchUserAccountByEmailUseCase('maria@exemple.com');
console.log('Search for user with changed name, expects object with new user name:\n', checkChangedUser);