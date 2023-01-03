import { findByEstate } from "../src/use-case/findByUF.js";
import { addAddressUseCase } from "../src/use-case/addAddress.js";

const endereço = {
  logradouro: 'Rua Um',
  numero: 100,
  complemento: 'NP',
  bairro: 'Qualquer',
  CEP: 30100000,
  cidade: 'São Paulo',
  UF: 'SP'
};

//estava dando erro se algum usuário nao possuise o UF, adicionei ao rafa aqui e nao na base para não atrapalhar o teste de adicionar endereço
addAddressUseCase(endereço, 'rafa@el.com.br');

const pesquisaSP = findByEstate('SP');
console.log('Pesquisa SP, espera lista com 2 usuarios', pesquisaSP);
