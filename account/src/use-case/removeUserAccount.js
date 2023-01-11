import { userList } from "./createUserAccount.js";

export const removeUserUseCase = (email) => {
  const index = userList.findIndex((ele) => ele.email === email);
  if (index === -1) {
    return false;
  } else {
    userList.splice(index, 1);
    return true;
  }
};

export { userList };
