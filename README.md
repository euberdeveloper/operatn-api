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

