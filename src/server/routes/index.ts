import * as express from 'express';
import chirpRouter from './chirps';

let router = express.Router();

//http://localhost:3000/api/chirps
router.use('/chirps', chirpRouter);


export default router;


