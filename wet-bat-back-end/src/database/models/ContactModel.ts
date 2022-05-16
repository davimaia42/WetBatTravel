import { Model } from 'objection';

export class ContactModel extends Model {
    public readonly value: string;

    public type:  string;
    public quoteId: string;

    static get tableName(){
        return 'contacts';
    }
}