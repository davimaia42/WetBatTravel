import { Request, Response } from 'express';
import { ListQuotesService } from './ListQuotesService';

export class ListQuotesController {
    constructor(private listQuotesService: ListQuotesService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const quotes = await this.listQuotesService.execute();

            return response.status(200).json(quotes);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}