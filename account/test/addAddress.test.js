import { addAddressUseCase } from "../src/use-case/addAddress.js";
import { searchUserAccountByEmailUseCase } from "../src/use-case/searchUserAccountByEmail.js";

const endereço = {
  logradouro: 'Rua Um',
  numero: 100,
  complemento: 'NP',
  bairro: 'Qualquer',
  CEP: 30100000,
  cidade: 'São Paulo',
  UF: 'SP'
};

const emailErrado = addAddressUseCase(endereço, 'errado@email.com');
console.log('Testa adicionar endereço com email errado, espera false', emailErrado);

const emailCorreto = addAddressUseCase(endereço, 'rafa@el.com.br');
console.log('Testa adicionar endereço com email correto, espera true', emailCorreto);

const confirmaDados = searchUserAccountByEmailUseCase('rafa@el.com.br');
console.log('Buscando usuário alterado, espera usuário com endereço', confirmaDados);
