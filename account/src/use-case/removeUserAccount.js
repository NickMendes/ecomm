import { usuariosList } from "./createUserAccount.js";

export const removeUserUseCase = (email) => {
  const index = usuariosList.findIndex((ele) => ele.email === email);
  if (index === -1) {
    return false;
  } else {
    usuariosList.splice(index, 1);
    return true;
  }
};

export { usuariosList };
