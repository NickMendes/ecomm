import { userList } from "./createUserAccount.js";

export const searchUserAccountByEmailUseCase = (email) => {
  const user = userList.find((ele) => ele.email === email);
  
  if (user) {
    return user
  } else if (user === undefined) {
    return Error('Usuário não encontrado');
  }
};
