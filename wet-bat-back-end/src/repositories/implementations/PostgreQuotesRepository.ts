import { Quote } from '../../entities/Quote';
import { QuoteModel } from '../../database/models/QuoteModel';
import { IQuotesRepository } from '../IQuotesRepository';

export class PostgreQuotesRepository implements IQuotesRepository {
    async list(): Promise<Quote[]> {
        return await QuoteModel.query();
    }

    async findById(id: string): Promise<Quote> {
        return await QuoteModel.query().findById(id);
    }

    async findByName(name: string): Promise<Quote> {
        return await QuoteModel.query().findOne({ name });
    }

    async save(quote: Quote): Promise<void> {
        await QuoteModel.query().insert(quote);
    }
}