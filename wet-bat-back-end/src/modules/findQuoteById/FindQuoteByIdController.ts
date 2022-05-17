import { Request, Response } from 'express';
import { FindQuoteByIdService } from './FindQuoteByIdService';

export class FindQuoteByIdController {
    constructor(private findQuoteByIdService : FindQuoteByIdService){}

    async handle(request : Request, response : Response) {
        const { id } = request.params;

        try {
            const quote = await this.findQuoteByIdService.execute(id);

            return response.status(200).json(quote);
        } catch(err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}