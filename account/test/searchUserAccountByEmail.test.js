import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";

const emailCorreto = searchUserAccountByEmailUseCase('rafa@el.com.br');
const emailErrado = searchUserAccountByEmailUseCase('nao@email.com');

console.log('Buscando email correto, espera um objeto como resposta', emailCorreto);
console.log('Buscando email errado, espera msg de erro', emailErrado);