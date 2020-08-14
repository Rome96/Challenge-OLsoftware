import { ADD_USER } from "../constants/actions-types";

const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export {
  addUser
}