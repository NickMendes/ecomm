import { usuariosList } from "./createUserAccount.js";

export const findByEstate = (uf) => {
  const usuariosByState = usuariosList.filter((ele) => ele.address.UF === uf);
  if (usuariosByState) {
    return usuariosByState;
  } else if (!usuariosByState) {
    return Error('Não existem usuários desse estado');
  };
};
