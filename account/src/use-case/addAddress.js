import { userList } from "./createUserAccount.js";

export const addAddressUseCase = (add, email) =>{
  const userOld = userList.find((ele) => ele.email === email);
  const index = userList.findIndex((ele) => ele.email === email);
  
  if (!userOld) {
    return false;
  } 

  const newUser = { ...userOld, address: add };
  userList.splice(index, 1);
  userList.push(newUser);

  return true;
};

export { userList };
