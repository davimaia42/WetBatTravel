import { Airport } from "../entities/Airport";

export interface IAirportsRepository{
    list() : Promise<Airport[]>;
}