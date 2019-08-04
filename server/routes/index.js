import { Router } from 'express';
import Response from '../utils/Response';

const router = Router();

router.get('/', (req, res) => {
  Response.success(res, 200, 'Welcome to the API');
});

export default router;
