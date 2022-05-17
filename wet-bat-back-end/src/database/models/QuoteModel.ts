import { Model, RelationMappings, RelationMappingsThunk } from 'objection';
import { ContactModel } from './ContactModel';

export class QuoteModel extends Model {
    public readonly id: string;

    public name:  string;
    public price: number;
    public number_of_travelers: number;
    public transportation: string;
    public departure_airport_id: string;
    public destination_airport_id: string;
    public departure_date: string;
    public destination_date: string;

    static get tableName(){
        return 'quotes';
    }

    static relationMappings: RelationMappings | RelationMappingsThunk= {
        contact: {
            relation: Model.HasOneRelation,
            modelClass: ContactModel,
            join: {
                from: 'quotes.id',
                to: 'contacts.quote_id'
            }
        }
    };
}