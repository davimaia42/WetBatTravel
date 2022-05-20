import { Request, Response } from 'express';
import { CreateQuoteService } from './CreateQuoteService';

export class CreateQuoteController {
    constructor(private createQuoteService: CreateQuoteService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        const {
            name,
            transportation,
            price,
            number_of_travelers,
            departure_airport_id,
            destination_airport_id,
            return_date,
            departure_date
        } = request.body;

        try {
            const quote = await this.createQuoteService.execute({
                name,
                transportation,
                number_of_travelers,
                price,
                departure_airport_id,
                destination_airport_id,
                departure_date,
                return_date
            });

            return response.status(201).json(quote);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}