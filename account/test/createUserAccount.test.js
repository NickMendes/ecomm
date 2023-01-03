import { createUserUseCase, usuariosList } from '../src/use-case/createUserAccount.js';

const user1 = createUserUseCase('Maria', 'maria@gmail.com', 'maria123');
const user2 = createUserUseCase('Jose', 'jose@hotmail.com', '123456js');

console.log(user1, user2);
console.log(usuariosList);
