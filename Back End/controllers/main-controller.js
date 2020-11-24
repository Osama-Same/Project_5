const users = [
  { name: 'jouza', age: 25 },
  { name: 'abd', age: 18 },
  { name: 'amr', age: 24 },
];

const getUserName = (req, res) => {
  console.log('getUserName CALLED');
  console.log('REQ.PARAMS: ',req.params)
  res.json(users[req.params.userIndex].name.toUpperCase());
};

const getAllUsers = (req, res) => {
  console.log('getAllUsers CALLED');
  res.json(users);
};

//   {"getAllUsers":getAllUsers    }
const deleteFirstUser = (req, res) => {
  console.log('deleteFirstUser CALLED');
  users.shift();
  res.json(users);
};


module.exports = {
  getAllUsers,
  deleteFirstUser,
  getUserName
};
