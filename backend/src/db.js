// Connection to Prisma DB and schema detail

const { prisma } = require("prisma-binding");

const db = new prisma({
  typeDefs: ".src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  endpoint: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
