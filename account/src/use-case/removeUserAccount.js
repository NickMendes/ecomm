import { userList } from "./createUserAccount.js";

export const removeUserUseCase = (email) => {
  const index = userList.findIndex((user) => user.email === email);
  
  if (index === -1) {
    return false;
  } 
    
  userList.splice(index, 1);
  
  return true;
};

export { userList };
