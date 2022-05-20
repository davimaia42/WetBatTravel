import { Router, Request, Response } from 'express';
import { listAirportsController } from '../modules/listAirports';

const airportsRouter = Router();

airportsRouter.get('/', (request : Request, response: Response) => {
    return listAirportsController.handle(request, response);
});

export { airportsRouter };