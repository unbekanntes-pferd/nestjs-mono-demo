export default () => ({
  port: parseInt(process.env.SERVICE_PORT, 10) || 3001,
  host: process.env.HOST,
  database: {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    testDatabase: process.env.POSTGRES_TEST_DATABASE,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
});
