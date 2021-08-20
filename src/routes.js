import express from 'express';
import multer from 'multer';

const routes = express.Router();

routes.get('/', (request, response) => {
    response.json({ message: "Hello World" });
});

export default routes;