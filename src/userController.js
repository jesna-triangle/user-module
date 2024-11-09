const userService = require('../src/userService');

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
};

exports.updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
};

exports.deleteUser = async (req, res) => {
  const user = await userService.deleteUser(req.params.id);
  if (user) res.json({ message: 'User deleted' });
  else res.status(404).json({ message: 'User not found' });
};
