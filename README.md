*********************************************************************************************
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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
https://www.youtube.com/watch?v=9KOZ8ZhchpQ&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=7




# Próxima => https://www.youtube.com/watch?v=9KOZ8ZhchpQ&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=7