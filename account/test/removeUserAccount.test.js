import { removeUserUseCase } from "../src/use-case/removeUserAccount.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";
import { createUserUseCase, userList } from '../src/use-case/createUserAccount.js';

createUserUseCase('Maria', 'maria@exemple.com', 'maria123');

const removeWrongEmail = removeUserUseCase('wrong@email.com');
console.log('Try to remove user using incorrect email, expects "False":\n', removeWrongEmail);

console.log('Checking if userList didnt changed, expects 1 user object:\n', userList);

const removeCorrectEmail = removeUserUseCase('maria@exemple.com');
console.log('Try to remove user with correct email, expects "True":\n', removeCorrectEmail);

const checkRemovedUser = searchUserAccountByEmailUseCase('maria@exemple.com');
console.log('Search for deleted user, expects Error Mgs:\n', checkRemovedUser);

console.log('Check userList, expect empty array:\n', userList);