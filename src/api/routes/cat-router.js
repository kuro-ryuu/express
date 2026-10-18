import express from 'express';
import {
  deleteCat,
  getCat,
  getCatById,
  postCat,
  putCat,
} from '../controllers/cat-controller.js';
import upload from '../../middlwares/upload.js';
import {createThumbnail} from '../../middlewares/upload.js';

const catRouter = express.Router();

catRouter
  .route('/')
  .get(getCat)
  .post(upload.single('cat'), createThumbnail, postCat);
catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

export default catRouter;
