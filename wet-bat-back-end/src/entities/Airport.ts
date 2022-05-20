import { v4 as uuid } from 'uuid'

export class Airport {
    public readonly id: string;

    public name:  string;
    public address_id: string;

    constructor(props: Omit<Airport, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}