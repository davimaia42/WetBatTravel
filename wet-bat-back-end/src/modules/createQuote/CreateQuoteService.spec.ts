import { ArrayQuotesRepository } from "../../repositories/implementations/ArrayQuotesRepository";
import { IQuotesRepository } from "../../repositories/IQuotesRepository";
import { CreateQuoteService } from "./CreateQuoteService";

describe ('Create Quote', () => {
    let quotesRepository: IQuotesRepository;
    let createQuoteService: CreateQuoteService;

    beforeAll(() => {
        quotesRepository = new ArrayQuotesRepository();
        createQuoteService = new CreateQuoteService(quotesRepository);
    })

    it('should be able to create a new quote', async () => {
        const quoteData = {
            name: 'test name',
            transportation: 'test transportation',
            number_of_travelers: 2,
            price: 1000,
            departure_airport_id: 'test airport departure',
            destination_airport_id: 'test airport destination',
            departure_date: Date.now().toString(),
            return_date: Date.now().toString()
        }

        const quote = await createQuoteService.execute(quoteData);

        expect(quote).toHaveProperty("id");
        expect(quote.name).toBe(quoteData.name);
        expect(quote.transportation).toBe(quoteData.transportation);
        expect(quote.price).toBe(quoteData.price);
    });

    it('should not be able to create an existing quote', async () => {
        const quoteData = {
            name: 'test existing name',
            transportation: 'test existing transportation',
            number_of_travelers: 2,
            price: 1000,
            departure_airport_id: 'test airport departure',
            destination_airport_id: 'test airport destination',
            departure_date: Date.now().toString(),
            return_date: Date.now().toString()
        }

        await createQuoteService.execute(quoteData);

        await expect(createQuoteService.execute(quoteData)).rejects.toEqual(new Error(`Quote ${quoteData.name} already exists`));
    });
})
