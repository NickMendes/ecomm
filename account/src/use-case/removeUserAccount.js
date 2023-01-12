import { userList } from "./createUserAccount.js";

export const removeUserUseCase = (email) => {
  const userIndex = userList.findIndex((user) => user.email === email);
  
  if (userIndex === -1) {
    return false;
  } 
    
  userList.splice(userIndex, 1);
  
  return true;
};

export { userList };
