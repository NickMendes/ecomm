import { userList } from "./createUserAccount.js";
import { removeUserUseCase } from "./removeUserAccount.js";

export const changeUserNameUseCase = (email, newName) => {
  const userChanging = userList.find((user) => user.email === email);

  if (!userChanging) {
    return false
  }

  const newUser = {
    id: userChanging.id,
    name: newName,
    email: userChanging.email,
    password: userChanging.password,
    createDate: userChanging.createDate
  };

  removeUserUseCase(email);
  userList.push(newUser);

  return true;
};

export { userList };
