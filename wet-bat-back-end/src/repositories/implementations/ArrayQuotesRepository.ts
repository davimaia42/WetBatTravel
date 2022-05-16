import { Quote } from '../../entities/Quote';
import { IQuotesRepository } from '../IQuotesRepository';

export class ArrayQuotesRepository implements IQuotesRepository {
    private quotes: Quote[] = [];

    async findByName(name: string): Promise<Quote> {
        const quote = this.quotes.find(quote => quote.name === name);
        return quote;
    }

    async save(quote: Quote): Promise<void> {
        this.quotes.push(quote);
    }
}