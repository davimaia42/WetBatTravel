import { Quote } from "../../entities/Quote";
import { IQuotesRepository } from "../../repositories/IQuotesRepository";
import { ICreateQuoteRequestDTO } from "./CreateQuoteDTO";

export class CreateQuoteService {
    constructor(private quotesRepository: IQuotesRepository) {}

    async execute(data: ICreateQuoteRequestDTO) {
        const quoteAlreadyExists = await this.quotesRepository.findByName(data.name);

        if(quoteAlreadyExists) {
            throw new Error(`Quote ${data.name} already exists`);
        }

        const quote = new Quote(data);

        await this.quotesRepository.save(quote);

        return quote;
    }
}