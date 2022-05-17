import { Quote } from "../../entities/Quote";
import { IQuotesRepository } from "../../repositories/IQuotesRepository";

export class FindQuoteByIdService {
    constructor(private quotesRepository: IQuotesRepository) {}

    async execute(id: string) {
        return await this.quotesRepository.findById(id);
    }
}