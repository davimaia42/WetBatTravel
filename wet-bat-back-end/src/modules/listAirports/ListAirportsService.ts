import { Airport } from "../../entities/Airport";
import { IAirportsRepository } from "../../repositories/IAirportsRepository";

export class ListAirportsService {
    constructor(private airportsRepository: IAirportsRepository) {}

    async execute() {
        return await this.airportsRepository.list();
    }
}