import { PostgreQuotesRepository } from "../../repositories/implementations/PostgreQuotesRepository";
import { CreateQuoteController } from "./CreateQuoteController";
import { CreateQuoteService } from "./CreateQuoteService";


const postgreQuotesRepository = new PostgreQuotesRepository();

const createQuoteService = new CreateQuoteService(postgreQuotesRepository);

const createQuoteController = new CreateQuoteController(createQuoteService);

export { createQuoteService, createQuoteController };