import { changeUserNameUseCase } from "../src/use-case/changeUserName.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";

const mudaNomeErrado = changeUserNameUseCase('errado@email.com', 'naoImporta');
console.log('Testa email errado para mudar nome de usuário, espera False', mudaNomeErrado);

const mudaNomeCorreto = changeUserNameUseCase('rafa@el.com.br', 'Fael');
console.log('Testa email correto, espera True', mudaNomeCorreto);

const confirma = searchUserAccountByEmailUseCase('rafa@el.com.br');
console.log('Confirma mudançca, espera user com nome atualizado', confirma);