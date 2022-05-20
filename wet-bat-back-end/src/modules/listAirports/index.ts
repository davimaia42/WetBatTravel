import { PostgreAirportsRepository } from "../../repositories/implementations/PostgreAirportsRepository";
import { ListAirportsController } from "./ListAirportsController";
import { ListAirportsService } from "./ListAirportsService";

const postgreAirportsRepository = new PostgreAirportsRepository();

const listAirportsService = new ListAirportsService(postgreAirportsRepository);

const listAirportsController = new ListAirportsController(listAirportsService);

export { listAirportsService, listAirportsController };