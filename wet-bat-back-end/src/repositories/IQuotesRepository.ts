import { Quote } from "../entities/Quote";

export interface IQuotesRepository{
    list() : Promise<Quote[]>;
    findById(id: string): Promise<Quote>;
    findByName(name: string): Promise<Quote>;
    save(quote: Quote): Promise<void>;
}