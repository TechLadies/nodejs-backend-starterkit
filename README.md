# NodeJS Backend Starter Kit

This is a starter kit with the following characteristics:

- Local Port Number: 3001
- Language: [NodeJS](https://nodejs.org/en/) (with NPM)
- App server: [Express JS](https://expressjs.com/)
- Authentication: PassportJS (http://www.passportjs.org/) - username + password with Cookies (no JWT)
- API framework: Roll our own REST API (no need for automated docs)
- Database: Postgres
- ORM: Sequelize (https://sequelize.org/)
- DB migration: https://sequelize.org/master/manual/migrations.html
- Testing:
    - Unit Tests: Jest (https://jestjs.io/)

## Steps in preparing this starter kit

1. We use the [Express Generator](https://expressjs.com/en/starter/generator.html) to prepare the skeleton:

    ```
    npx express-generator --no-view --git
    ```

2. Add dependencies:

    ```
    npm install --save passport passport-local sequelize pg pg-hstore
    ```

3. Add dev dependencies:

    ```
    npm install --save-dev jest
    npm install --save-dev --save-exact prettier
    ```

4. Prepare the files needed to use the libraries.