import {
  ADD_USER,
  IS_LOGIN,
  DELETE_USER,
  UPDATE_USER
} from "../constants/actions-types";

const logged = payload => {
  return {
    payload,
    type: IS_LOGIN,
  }
}

const addUser = payload => {
  return {
    payload,
    type: ADD_USER,
  };
};

const updateUser = payload => {
  return {
    payload,
    type: UPDATE_USER,
  }
}

const deleteUser = payload => {
  return {
    payload,
    type: DELETE_USER,
  };
};

export {
  logged,
  addUser,
  updateUser,
  deleteUser
}