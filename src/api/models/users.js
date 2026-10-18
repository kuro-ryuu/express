const userItems = [
  {
    user_id: 1111,
    name: 'fih',
    username: 'glub',
    email: 'fih@ocean.earth',
    role: 'food',
    password: 'cod',
  },
  {
    user_id: 1112,
    name: 'shrim',
    username: 'clickclickclick',
    email: 'crustecean@ocean.earth',
    role: 'smaller food',
    password: 'crab',
  },
];

export const getUsers = () => userItems;

export const getUserById = (id) =>
  userItems.find((user) => user.user_id === Number(id));

export const addUser = (user) => {
  const nextId =
    userItems.reduce((maxId, item) => Math.max(maxId, item.user_id), 0) + 1;
  const newUser = {...user, user_id: nextId};
  userItems.push(newUser);
  return newUser;
};
