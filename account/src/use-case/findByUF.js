import { userList } from "./createUserAccount.js";

export const findByEstate = (uf) => {
  const usuariosByState = userList.filter((user) => user.address.UF === uf);
  
  if (!usuariosByState) {
    return Error('Não existem usuários desse estado');
  }
  
  return usuariosByState;
};
