import {addCat, findCatById, listAllCats} from '../models/cats.js';

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    return res.json(cat);
  }

  return res.sendStatus(404);
};

const postCat = (req, res) => {
  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res.status(400).json({message: 'Request body must be an object.'});
  }

  const {cat_name, filename, birthdate} = req.body;
  const weight = Number(req.body.weight);
  const owner = Number(req.body.owner);
  const date = typeof birthdate === 'string'
    ? new Date(`${birthdate}T00:00:00.000Z`)
    : null;
  const validBirthdate =
    date &&
    !Number.isNaN(date.getTime()) &&
    date.toISOString().slice(0, 10) === birthdate;

  if (
    typeof cat_name !== 'string' ||
    !cat_name.trim() ||
    !Number.isFinite(weight) ||
    weight <= 0 ||
    !Number.isInteger(owner) ||
    owner <= 0 ||
    typeof filename !== 'string' ||
    !filename.trim() ||
    !validBirthdate
  ) {
    return res.status(400).json({
      message:
        'Provide cat_name, a positive weight, a positive integer owner, filename, and a valid YYYY-MM-DD birthdate.',
    });
  }

  const result = addCat({
    cat_name: cat_name.trim(),
    weight,
    owner,
    filename: filename.trim(),
    birthdate,
  });
  return res.status(201).json({message: 'New cat added.', result});
};

const putCat = (req, res) => {
  res.sendStatus(200);
};

const deleteCat = (req, res) => {
  res.sendStatus(200);
};

export {getCat, getCatById, postCat, putCat, deleteCat};
