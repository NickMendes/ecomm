export const userList = [];

export const createUserUseCase = (name, email, password, address) => {
  const dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'-');
  const date = dateNow.toString('dd-MM-yyyy');

  const user = {
    id: userList.length + 1,
    name,
    email,
    password,
    createDate: date,
    address: address || {}
  };

  userList.push(user);
  
  return user;
};
