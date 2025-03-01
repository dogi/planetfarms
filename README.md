# Planet Farms

Planet Farms is a system built in PERN Stack.
This stack consists of [PostgreSQL](https://www.postgresql.org/), [Express](https://expressjs.com/), [React](https://reactjs.org/) and [Node.js](https://nodejs.org/en/)

## Getting Started

After you clone the repository. You can create or edit `.env` file and add `REACT_APP_API_BASE_URL = http://127.0.0.1:5000` as environment variable.

### `npm install`

You can install dependencies by `npm install` in your Frontend and after that you can go to Backend by `cd api` and `npm install` to install dependencies in your Backend.

### `npm start`

Runs only Frontend in the development mode.\
You can enter `npm start` in the base directory.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs only Backend in the development mode.\
You can go to Back by `cd api` and enter `npm start`.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

Runs Backend as well as Frontend in the development mode.\
You can enter `npm run dev` in the base directory.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### environment

`.env` file for frontend
```
REACT_APP_API_BASE_URL=<URL for API server>
REACT_APP_CDN_BASE_URL=<URL for File server>
REACT_APP_AUTH_METHOD=<**local** or **cognito**>
REACT_APP_COGNITO_REGION=<required only if using cognito auth method>
REACT_APP_COGNITO_POOL_ID=<required only if using cognito auth method>
REACT_APP_COGNITO_CLIENT_ID=<required only if using cognito auth method>
REACT_APP_COGNITO_DOMAIN_NAME=<required only if using cognito auth method>
```

`.env` file for api
```
JWT_SECRET=<secret for token>
DATABASE_NAME=<database name>
DATABASE_USERNAME=<database username>
DATABASE_PASSWORD=<database password>
DATABASE_HOST=<database server>
```

### `docker-compose up`

[Docker](https://www.docker.com/) is a software platform for building applications based on containers — small and lightweight execution environments that make shared use of the operating system kernel but otherwise run in isolation from one another.

To run docker first you need to install docker on your computer after than enter `docker-compose up` which will pull the latest images.

### `npx sequelize-cli db:migrate`

[Sequelize](https://sequelize.org/) is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.

Now to actually create that table in database you need to run `npx sequelize-cli db:migrate` command. This command will create table and to seed your database you can run `npx sequelize-cli db:seed:all`.

### `npx standard --fix`

[Standard JS](https://standardjs.com) is the easiest way to enforce code quality in your project.

Just run `npx standard --fix` and say goodbye to messy or inconsistent code. For linting specific file run `npx standard --fix "path_of_file_or_folder"`
