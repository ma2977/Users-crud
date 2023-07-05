const catchError = require('../utils/catchError');
const User = require('../models/User.js');
const getAll = catchError(async (req, res) => {
  const user = await User.findAll();
  return res.json(user);
});
const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.create({ first_name, last_name, email, password, birthday });
  return res.status(201).json(user);
})
const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if(!user) return res.status(404).json({ message: "user not found" })
  return res.json(user);
})
const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } })
  return res.sendStatus(204);
})
const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  const updatedUser = await User.update({ first_name, last_name, email, password, birthday }, { where: { id }, returning: true })
  return res.json(updatedUser);
})
module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
}
