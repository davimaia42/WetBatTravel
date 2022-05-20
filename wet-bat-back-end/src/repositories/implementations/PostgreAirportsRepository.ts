import { Airport } from '../../entities/Airport';
import { AirportModel } from '../../database/models/AirportModel';
import { IAirportsRepository } from '../IAirportsRepository';

export class PostgreAirportsRepository implements IAirportsRepository {
    async list(): Promise<Airport[]> {
        return await AirportModel.query();
    }
}