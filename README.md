# WetBatTravel
![image](https://user-images.githubusercontent.com/42348811/169619854-1bd4d83a-0974-4645-bb8b-f65d5e25b22d.png)

## Database model
![image](https://user-images.githubusercontent.com/42348811/169622048-5b8086cd-944b-493d-a441-23ee698063d5.png)

## Technologies used
This project is built using:
* Node.js - Objection.js - Knex.js - PostgreSQL
* React - Chackra UI
* TypeScript

I opted using the stack and tools specified on the job opening. Some of then, like Objection and Chakra UI, I have never
used before (but I've used similar ones, like typeorm and material ui), this decision resulted in a longer time to 
finish the prototype, but it was a great opportunity to have a first contact and learn them, and to be more prepared
for the job.


## How to run
Create a postgre database and a .env file, on the base folder, following the .env.example, with the database credentials\
To run the back-end, use the following commands on the wet-bat-back-end folder:
```
  npm install
  npx knex migrate:latest
  npx knex seed:run
  npm run dev
 ```
 You can alson run the jest unit test with:
 ``` 
  npm run test
 ```
 To run the front-end, use the following commands on the wet-bat-front-end folder:
 ```
  npm install
  npm start
 ```
