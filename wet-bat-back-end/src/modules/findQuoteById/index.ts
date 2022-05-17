import { PostgreQuotesRepository } from "../../repositories/implementations/PostgreQuotesRepository";
import { FindQuoteByIdController } from "./FindQuoteByIdController";
import { FindQuoteByIdService } from "./FindQuoteByIdService";

const postgreQuotesRepository = new PostgreQuotesRepository();

const findQuoteByIdService = new FindQuoteByIdService(postgreQuotesRepository);

const findQuoteByIdController = new FindQuoteByIdController(findQuoteByIdService);

export { findQuoteByIdService, findQuoteByIdController };