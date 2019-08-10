import { Router } from 'express';
import Response from '../utils/Response';
import BookController from '../controllers/BookController';

const router = Router();

router.get('/', (req, res) => {
  Response.success(res, 200, 'Welcome to the API');
});

router.get('/books', BookController.getAllBooks);

export default router;
