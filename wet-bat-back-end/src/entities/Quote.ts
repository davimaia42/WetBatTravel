import { v4 as uuid } from 'uuid'

export class Quote {
    public readonly id: string;

    public name:  string;
    public price: number;
    public number_of_travelers: number;
    public transportation: string;
    public departure_airport_id: string;
    public destination_airport_id: string;
    public departure_date: string;
    public destination_date: string;

    constructor(props: Omit<Quote, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}