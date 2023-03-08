import { userList } from './createUserAccount.js';

export const addAddressUseCase = (add, email) =>{
    const userOld = userList.find((user) => user.email === email);
    const userIndex = userList.findIndex((user) => user.email === email);
  
    if (!userOld) {
        return false;
    } 

    const newUser = { ...userOld, address: add };
    userList.splice(userIndex, 1);
    userList.push(newUser);

    return true;
};
