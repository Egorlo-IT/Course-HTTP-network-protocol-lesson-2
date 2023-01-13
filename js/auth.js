import { createRequire } from "module";

const require = createRequire(import.meta.url);
const users = require("../data/users.json");

export const auth = (username, password) => {
  for (const i in users) {
    if (users[i].username === username && users[i].password === password)
      return true;
  }
  return false;
};

export const getUserID = (username, password) => {
  for (const i in users) {
    if (users[i].username === username && users[i].password === password)
      return users[i].id;
  }
  return false;
};
