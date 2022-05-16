import { v4 as uuid } from 'uuid'

export class Quote {
    public readonly id: string;

    public name:  string;
    public price: number;
    public transportation: string;
    public departure_airport_id: string;
    public destination_airport_id: string;

    constructor(props: Omit<Quote, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}