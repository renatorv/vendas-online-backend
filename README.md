*********************************************************************************************
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```
*******************************************************************************************************************
# https://www.youtube.com/watch?v=2wJ3LjPjEbI&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=3
Criar controller: AppModule responsável por chamara os outros módulo da aplicação
nest g module user
nest g controller user

Configuração do Postman

*******************************************************************************************************************
# https://www.youtube.com/watch?v=4aXUup0wTDM&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=4
Verbos HTTP:
Get    =>  busca dados
Post   => salvar dados, enviados no corpo 
Put    => atualiza todos os dados do objeto
Patch  => atualiza somente um atributo do objeto
Delete => deleta um objeto

Dto => dados enviados pelo usuário
Interface => é o objeto propriamente dito


*******************************************************************************************************************
# https://www.youtube.com/watch?v=7w5_R2ndx0Y&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=5
Services: [ nest g service user ]

Segurança:
npm i bcrypt
npm i -D @types/bcrypt

*******************************************************************************************************************
# https://www.youtube.com/watch?v=B4zD7ffzpac&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=6
Configuração das variáveis de conexão com o banco de dados.
npm i --save @nestjs/config

npm install --save typeorm pg @nestjs/typeorm

*******************************************************************************************************************
https://www.youtube.com/watch?v=GKlf15yGR2w&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=8
Aula 07 [NestJS] - Criação de migrations utilizando TypeOrm no Nest.js
parametro synchronize: true não é bom usar em produção
Migrations: script de bd que é executado antes do servidor ser rodado.

npx typeorm migration:create ./src/migration/create_table_user

npx typeorm migration:create ./src/migration/create_table_state
npx typeorm migration:create ./src/migration/create_table_city
npx typeorm migration:create ./src/migration/create_table_address

*******************************************************************************************************************
https://www.youtube.com/watch?v=b5s02aQTOh8&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=9

npx typeorm migration:create ./src/migration/alter_table_state
npx typeorm migration:create ./src/migration/insert_into_state
npx typeorm migration:create ./src/migration/insert_into_city

nest g module state
nest g module city
nest g module address

nest g controller state
nest g service state

*******************************************************************************************************************
https://www.youtube.com/watch?v=tH56ijYRL4s&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=10




# Próxima => https://www.youtube.com/watch?v=tH56ijYRL4s&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=10
*******************************************************************************************************************