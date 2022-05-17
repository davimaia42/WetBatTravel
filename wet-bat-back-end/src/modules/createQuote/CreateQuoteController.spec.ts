import { app } from "../../app";
import { v4 as uuid } from "uuid";
import request from "supertest";

describe('Create Quote Controller', () => {
    it('should be able to create a new quote', async () => {
        const response = await request(app).post('/quotes').send({
            name: "test name-" + uuid(),
            transportation: "test transportation",
            price: 1000,
            number_of_travelers: 2,
            departure_airport_id: "5b477359-9431-4334-b6f9-25afbf5a83bf",
            destination_airport_id: "cf76f87f-c868-46ed-ba81-b0f70d3cc054"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    })
})