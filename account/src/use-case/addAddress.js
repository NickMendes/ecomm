import { usuariosList } from "./createUserAccount.js";

export const addAddressUseCase = (add, email) =>{
  const userOld = usuariosList.find((ele) => ele.email === email);
  const index = usuariosList.findIndex((ele) => ele.email === email);
  
  if (userOld) {
    const newUser = { ...userOld, address: add };
    usuariosList.splice(index, 1);
    usuariosList.push(newUser);
    return true;
  } else if (!userOld) {
    return false;
  };
};

export { usuariosList };
