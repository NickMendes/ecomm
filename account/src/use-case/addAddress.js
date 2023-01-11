import { userList } from "./createUserAccount.js";

export const addAddressUseCase = (add, email) =>{
  const userOld = userList.find((ele) => ele.email === email);
  const index = userList.findIndex((ele) => ele.email === email);
  
  if (userOld) {
    const newUser = { ...userOld, address: add };
    userList.splice(index, 1);
    userList.push(newUser);
    return true;
  } else if (!userOld) {
    return false;
  };
};

export { userList };
