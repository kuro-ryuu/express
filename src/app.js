import express from 'express';
import api from './api/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  const myData = {
    cat_id: 1,
    name: 'carks',
    birthdate: '2021-05-12',
    weight: 4.2,
    owner: 'Alex',
    image: '/public/puh.jpg',
  };
  res.json(myData);
});

app.use('/api/v1', api);

export default app;
