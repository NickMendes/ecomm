export const userList = [];
let idNumber = 1;

export const createUserUseCase = (name, email, password, address) => {
    const dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    const date = dateNow.toString('dd-MM-yyyy');

    const user = {
        id: idNumber,
        name,
        email,
        password,
        createDate: date,
        address: address || {}
    };
    idNumber += 1;
    userList.push(user);
  
    return user;
};
