import { ADD_USER, DELETE_USER, UPDATE_USER } from "../constants/actions-types";

const addUser = (payload) => {
  return {
    payload,
    type: ADD_USER,
  };
};

const updateUser = (payload) => {
  return {
    payload,
    type: UPDATE_USER,
  }
}

const deleteUser = (payload) => {
  return {
    payload,
    type: DELETE_USER,
  };
};

export {
  addUser,
  updateUser,
  deleteUser
}