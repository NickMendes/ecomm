import { usuariosList } from "./createUserAccount.js";
import { removeUserUseCase } from "./removeUserAccount.js";

export const changeUserNameUseCase = (email, newName) => {
  const user = usuariosList.find((ele) => ele.email === email);

  if (user) {
    const newUser = {
      id: user.id,
      name: newName,
      email: user.email,
      password: user.password,
      createDate: user.createDate
    };

    removeUserUseCase(email);
    usuariosList.push(newUser);

    return true;
  } else if (!user) {
    return false
  }
};

export { usuariosList };
