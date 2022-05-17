import { Router, Request, Response } from 'express';
import { createQuoteController } from '../modules/createQuote';
import { listQuotesController } from '../modules/listQuotes';
import { findQuoteByIdController } from '../modules/findQuoteById';

const quotesRouter = Router();

quotesRouter.get('/', (request : Request, response: Response) => {
    return listQuotesController.handle(request, response);
});

quotesRouter.get('/:id', (request : Request, response: Response) => {
    return findQuoteByIdController.handle(request, response);
});

quotesRouter.post('/', (request : Request, response: Response) => {
    return createQuoteController.handle(request, response);
});

export { quotesRouter };