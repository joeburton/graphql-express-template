import express from "express";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { typeDefs } from "./typedefs/index.js";
import { resolvers } from "./resolvers/index.js";

async function startApolloServer() {
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port: 5001 }, resolve));

  console.log(`🚀 Server ready at http://localhost:5001${server.graphqlPath}`);

  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

  return { server, app };
}

startApolloServer();
