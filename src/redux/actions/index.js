import { ADD_USER, DELETE_USER } from "../constants/actions-types";

const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};
export {
  addUser,
  deleteUser
}