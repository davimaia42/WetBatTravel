import { PostgreQuotesRepository } from "../../repositories/implementations/PostgreQuotesRepository";
import { ListQuotesController } from "./ListQuotesController";
import { ListQuotesService } from "./ListQuotesService";

const postgreQuotesRepository = new PostgreQuotesRepository();

const listQuotesService = new ListQuotesService(postgreQuotesRepository);

const listQuotesController = new ListQuotesController(listQuotesService);

export { listQuotesService, listQuotesController };