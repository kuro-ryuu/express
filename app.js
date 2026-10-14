import express from 'express';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  const myData = {
    cat_id: 1,
    name: 'Misu',
    birthdate: '2021-05-12',
    weight: 4.2,
    owner: 'Alex',
    image: 'C:\Users\Admin\express\public\puh.jpg',
  };
  res.json(myData);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
