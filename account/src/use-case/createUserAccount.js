export const userList = [
  {
    id: 1,
    name: 'Rafael',
    email: 'rafa@el.com.br',
    password: 'rafa123rafa',
    createDate: '2023-03-01',
  },
  {
    id: 2,
    name: 'Rafaela',
    email: 'rafa@ela.com.br',
    password: 'rafa123rafa',
    createDate: '2023-03-01',
    address: {
      logradouro: 'Rua Um',
      numero: 100,
      complemento: 'NP',
      bairro: 'Qualquer',
      CEP: 30100000,
      cidade: 'São Paulo',
      UF: 'SP',
    },
  },
  {
    id: 3,
    name: 'Regina',
    email: 'regi@na.com.br',
    password: 'regi123',
    createDate: '2023-03-01',
    address: {
      logradouro: 'Rua Um',
      numero: 100,
      complemento: 'NP',
      bairro: 'Qualquer',
      CEP: 30100000,
      cidade: 'Belo Horizonte',
      UF: 'MG',
    },
  },

];

export const createUserUseCase = (name, email, password) => {
  const dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'-');
  const date = dateNow.toString('dd-MM-yyyy');

  const user = {
    id: userList.length + 1,
    name,
    email,
    password,
    createDate: date
  };

  userList.push(user);
  
  return user;
}
