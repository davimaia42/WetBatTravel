import { Router } from 'express';
import { quotesRouter } from './quotes.routes';

const routes = Router();

routes.use('/quotes', quotesRouter);

routes.get('/', (req, res) => {
    return res.send('Hello World!');
});

export { routes };