export interface ICreateQuoteRequestDTO {
    name: string;
    price: number;
    transportation: string;
    departure_airport_id: string;
    destination_airport_id: string;
}