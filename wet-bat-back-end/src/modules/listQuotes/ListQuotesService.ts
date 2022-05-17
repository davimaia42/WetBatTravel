import { Quote } from "../../entities/Quote";
import { IQuotesRepository } from "../../repositories/IQuotesRepository";

export class ListQuotesService {
    constructor(private quotesRepository: IQuotesRepository) {}

    async execute() {
        return await this.quotesRepository.list();
    }
}