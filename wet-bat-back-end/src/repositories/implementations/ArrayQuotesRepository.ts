import { Quote } from '../../entities/Quote';
import { IQuotesRepository } from '../IQuotesRepository';

export class ArrayQuotesRepository implements IQuotesRepository {
    private quotes: Quote[] = [];

    async list(): Promise<Quote[]> {
        return this.quotes;
    }

    async findById(id: string): Promise<Quote> {
        return this.quotes.find(quote => quote.id === id);
    }
    async findByName(name: string): Promise<Quote> {
        return this.quotes.find(quote => quote.name === name);
    }

    async save(quote: Quote): Promise<void> {
        this.quotes.push(quote);
    }
}