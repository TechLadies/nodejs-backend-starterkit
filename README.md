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
- Linter: ESLint (https://eslint.org)

## Steps in preparing this starter kit

1. We use the [Express Generator](https://expressjs.com/en/starter/generator.html) to prepare the skeleton:

    ```bash
    npx express-generator --no-view --git
    ```
    
    Move the generated files into an `src` folder.

2. Prepare the JavaScript linter

	We installed [ESLint](https://eslint.org) with the [StandardJS](https://github.com/standard/eslint-config-standard) coding style.
	
	1. `npx eslint --init`
	
	2. Select "Use a popular style guide."
	
	3. Select "Standard."
	
	4. Select 'JSON' as the config file format.
	
	5. If prompted, confirm the installation of the necessary dependencies.

	Update `package.json` with the `jslint` and `jsfmt` scripts
	
	```json
	"scripts": {
		"jsfmt": "eslint \"src/**/*.js\" --fix",
    	"jslint": "eslint \"src/**/*.js\""
    	...
	}
	```

	
3. Add the [Jest](https://jestjs.io) testing framework:

    ```bash
    npm install --save-dev jest eslint-plugin-jest
    ```
    
    Add the ESLint configurations into `.eslintrc.js` (refer to <https://github.com/jest-community/eslint-plugin-jest#readme>)
    
4. Add nodemon for dev server

	```bash
	npm install --save-dev nodemon
	```
	
	Update `package.json` accordingly to add a dev server.
	
	```json
	"scripts": {
    	"start": "NODE_ENV=production node ./bin/www",
	    "dev": "NODE_ENV=development PORT=3001 DEBUG=app:* nodemon --ignore '*.test.js' --watch src bin/www",
	    ...
    }
	```
	
5. Debugging

	Use [Debug](https://github.com/visionmedia/debug) to add your debugging messages to the terminal.

	```javascript
	const debug = require('debug')('app:users')
	
	debug('Hello World!')
	```

6. Add other dependencies:

    ```bash
    npm install --save passport passport-local sequelize pg pg-hstore
    ```

