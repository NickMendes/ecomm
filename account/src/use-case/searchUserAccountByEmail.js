import { userList } from "./createUserAccount.js";

export const searchUserAccountByEmailUseCase = (email) => {
  const userFound = userList.find((user) => user.email === email);
  
  if (!userFound) {
    return Error('Usuário não encontrado');
  }

  return userFound;
};
