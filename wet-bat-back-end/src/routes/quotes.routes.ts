import { Router, Request, Response } from 'express';
import { createQuoteController } from '../modules/createQuote';

const quotesRouter = Router();

quotesRouter.post('/', (request : Request, response: Response) => {
    return createQuoteController.handle(request, response);
});

export { quotesRouter };