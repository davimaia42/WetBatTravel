import { Model, RelationMappings, RelationMappingsThunk } from 'objection';
import { QuoteModel } from './QuoteModel';

export class AirportModel extends Model {
    public readonly id: string;

    public name: string;
    public address_id: string;

    static get tableName(){
        return 'airports';
    }

    static relationMappings: RelationMappings | RelationMappingsThunk= {
        departure: {
            relation: Model.HasOneRelation,
            modelClass: QuoteModel,
            join: {
                from: 'airports.id',
                to: 'quotes.departure_airport_id'
            }
        },
        destination: {
            relation: Model.HasOneRelation,
            modelClass: QuoteModel,
            join: {
                from: 'airports.id',
                to: 'quotes.destination_airport_id'
            }
        },
    };
}