import { Router } from 'express';
import { quotesRouter } from './quotes.routes';
import { airportsRouter } from './airports.routes';

const routes = Router();

routes.use('/quotes', quotesRouter);
routes.use('/airports', airportsRouter);

routes.get('/', (req, res) => {
    return res.send('Hello World!');
});

export { routes };