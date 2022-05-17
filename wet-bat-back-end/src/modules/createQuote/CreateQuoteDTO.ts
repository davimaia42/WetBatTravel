export interface ICreateQuoteRequestDTO {
    name: string;
    price: number;
    number_of_travelers: number;
    transportation: string;
    departure_airport_id: string;
    destination_airport_id: string;
    departure_date: string;
    destination_date: string;
}