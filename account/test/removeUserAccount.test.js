import { removeUserUseCase } from "../src/use-case/removeUserAccount.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";

const removeErrado = removeUserUseCase('errado@email.com');
console.log('Tenta remover com o email errado, espera False', removeErrado);

const removeCorreto = removeUserUseCase('rafa@el.com.br');
console.log('Remover com o email correto, espera True', removeCorreto);

const emailCorreto = searchUserAccountByEmailUseCase('rafa@el.com.br');
console.log('Buscando email já deletado, espera Erro', emailCorreto);