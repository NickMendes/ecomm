const usuariosList = [];

export const createUserUseCase = (name, email, password) => {
  const dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'-');
  const date = dateNow.toString('dd-MM-yyyy');

  const user = {
    id: usuariosList.length + 1,
    name,
    email,
    password,
    createDate: date
  };

  usuariosList.push(user);
  
  return user;
}
