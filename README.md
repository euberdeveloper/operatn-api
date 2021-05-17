# operatn-api
This is the repo for the API of OperaTN.

## How was it made

These APIs were made by using:
* __Node.js__ with __expressjs__ for the server: this is both because it was the choice of the first programmer and because is my preferred framework.
* __Typescript__ as language: this is because Typescript is the only way to have a decent code, which becomes robuster and easier to debug.
* __Prisma.js__ as ORM: this is because having to embed all the SQL queries in the code was a hell. Prisma is the best choice, suupports lots of SQL databases and provides the best types support.

Other modules that were used:
* __axios__ to make api calls (expecially the ones to the contabilità server)
* __bcrypt__ to hash passwords with salt
* __passsport__ to handle authentication
* __bull__ to have a good cron service based on redis
* __dayjs__ to handle dates in a powerful way
* __dotenv__ to change configuration without retranspiling the code
* __euberlog__ to have a nice display log
* __joi__ for data validation
* __module_alias__ to avoid the "import hell"
* __morgan__ to have a request log
* __multer__ for the uploads
* __nodemailer__ for sending emails, with an extension for templates with pug
* __pdfmake__ for generating pdf files
* __exceljs__ for generating excel files

## How to start it

The first time:

* Create a `.env` file, by following the `.env.example` file, fill it with the proper values
* Run `npm install` to install the dependencies
* Run `npm run transpile` to transpile Typescript into Javascript
* Run `npm start` to start the server
* If you want to traspile and start in one command, use `npm run serve`

After making changes:

* If you changed the `prisma.schema`, execute `npm run prisma:client`
* Run `npm run transpile` to transpile Typescript into Javascript
* Run `npm start` to start the server
* If you want to traspile and start in one command, use `npm run serve`

## How is deployed

There is a `Dockerfile`, which is synced with `Dockerhub` and creates an image of the APIs.

## The api client

This repo contains also the **OperaTN API-Client** module. It is in the folder `api-client` and is an **npm module** that will be used by any frontend to make requests to the server. 

**NOTE:** you should update it every time you change the REST APIs

The api client is made with **Typescript** and uses **Webpack** to be bundled. The script `npm run port` copies the errors classes and the prisma types from the api code into the api-client code.

To publish it after having changed it, just update the **version** in the `package.json` and run `npm publish`.

You can also generate the documentation of the api-client with **Typedoc**, just run `npm run docs`.

## Api reference

For "svogliatezza", no api reference was done. It could be implemented in the future with **Swagger** or **Apiary**. To have a reference of the api, you can use the documentation generated by **Typedoc** for the **api-client**
