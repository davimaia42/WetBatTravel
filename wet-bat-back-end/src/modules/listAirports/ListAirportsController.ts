import { Request, Response } from 'express';
import { ListAirportsService } from './ListAirportsService';

export class ListAirportsController {
    constructor(private listAirportsService: ListAirportsService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const airports = await this.listAirportsService.execute();

            return response.status(200).json(airports);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}