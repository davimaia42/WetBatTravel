import { Quote } from "../entities/Quote";

export interface IQuotesRepository{
    findByName(name: string): Promise<Quote>;
    save(quote: Quote): Promise<void>;
}