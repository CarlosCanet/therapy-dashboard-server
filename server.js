try {
  process.loadEnvFile();
} catch (error) {
  console.log("There is no .env file, using default env variables");
}
const jsonServer = require("json-server");
const server = jsonServer.create();

// Server configuration
const middlewares = jsonServer.defaults();
server.use(middlewares);

// Create all routes
const router = jsonServer.router("db.json");
server.use(router);

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log(`JSON server is running at port ${PORT}`);
  console.log(`Local access at http://localhost:${PORT}`);
});