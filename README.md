This repository serves as the backend for Lambda School's MedCabinet Build Week Group of November 2019.
---
>Documentation
 ### Register and Login
 | POST   | /api/auth/register              | requres a `username` and a `password`

| POST   | /api/auth/login             | requres a `username` and a `password` and returns an authorized token

### Users 

| GET   | /api/users           | Will display all 
users

| GET   | /api/users/:id/ailments            | Will display a specific users ailments

### Intake

| GET   | /api/ailments           | Will display all ailments

| GET   | /api/ailments/:id           | Will display a single ailment 

| DELETE | /api/ailments/:id           | Will delete a specific ailment

| POST | /api/ailments           | Will add a new ailment it requires an `ailment` and a `description`

### Strains
| GET   | /api/strains          | Will display all strains and their attributes

| GET   | /api/strains/:id         | Will display a single selected strain and its attributes

| POST  | /api/strains        | Will add a new strain it's body requires `strain_name`, `strain_type`, `effects`, and a `flavors`. It can also take in a `strain_desc` as a description of the strin

| DELETE   | /api/strains/:id           | Will delete a specific strain

### Recomended Strains
this requires a specific user be signed in with a completed ailment to return 

| GET   | /api/recommends         | Will return `all` strain recomendations for `a` user for all of that users ailments

| GET   | /api/recommends/:id        | Will return a single specific recommended strain for a users specific ailment


---
>Dependencies
-knex

-knex-cleaner

-bcryptjs

-cors

-express

-helmet

-jsonwebtoken

-jest (testing)

-supertest (testing)

-Local Server: SQLite3

-Deployed Server: PostgreSQL
---
>Getting Started
Follow these steps to get setup on this server:

 Fork this repository
 Navigate into the back-end directory
 npm install to install dependencies
 npx knex migrate:latest to create local tables
 OPTIONAL npx knex seed:run to create seed records
 npm run server to run server on local host (uses SQLite3)
 npm run test to run tests