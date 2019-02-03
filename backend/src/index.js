require("dotenv").config({ path: ".env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO express - handle cookies
// TODO express - populate user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  connectionEvent => {
    console.log(`Server is now running on port ${connectionEvent.port}`);
  }
);
