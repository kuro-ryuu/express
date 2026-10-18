import {addUser, getUserById, getUsers} from '../models/users.js';

export const listUsers = (req, res) => {
  res.json(getUsers());
};

export const showUser = (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({message: 'User not found.'});
  }

  return res.json(user);
};

export const createUser = (req, res) => {
  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res
      .status(400)
      .json({message: 'Request body must be a JSON object.'});
  }

  return res.status(201).json(addUser(req.body));
};

export const updateUser = (req, res) => {
  res.json({message: 'User item updated.'});
};

export const deleteUser = (req, res) => {
  res.json({message: 'User item deleted.'});
};
