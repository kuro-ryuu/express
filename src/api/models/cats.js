const catItems = [
  {
    cat_id: 1,
    cat_name: 'crab',
    weight: 11,
    owner: 1111,
    filename: '/public/cab.png',
    birthdate: '2021-10-12',
  },
  {
    cat_id: 2,
    cat_name: 'carks',
    weight: 8,
    owner: 1112,
    filename: '/public/carks.jpg',
    birthdate: '2024-02-22',
  },
];

export const listAllCats = () => catItems;

export const findCatById = (id) =>
  catItems.find((cat) => cat.cat_id === Number(id));

export const addCat = (cat) => {
  const {cat_name, weight, owner, filename, birthdate} = cat;
  const nextId =
    catItems.reduce((maxId, item) => Math.max(maxId, item.cat_id), 0) + 1;
  catItems.unshift({
    cat_id: nextId,
    cat_name,
    weight,
    owner,
    filename,
    birthdate,
  });
  return {cat_id: nextId};
};
