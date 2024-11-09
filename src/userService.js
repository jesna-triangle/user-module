const User = require('../src/userModel');

exports.createUser = async (userData) => {
  return await User.create(userData);
};

exports.getAllUsers = async () => {
  return await User.find();
};

exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

 
