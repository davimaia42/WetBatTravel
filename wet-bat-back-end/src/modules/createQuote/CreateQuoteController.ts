import { Request, Response } from 'express';
import { CreateQuoteService } from './CreateQuoteService';

export class CreateQuoteController {
    constructor(private createQuoteService: CreateQuoteService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        const { name, transportation, price, departure_airport_id, destination_airport_id} = request.body;

        try {
            const quote = await this.createQuoteService.execute({
                name,
                transportation,
                price,
                departure_airport_id,
                destination_airport_id
            });

            return response.status(201).json(quote);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}