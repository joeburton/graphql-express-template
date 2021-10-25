import express from "express";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";

async function startApolloServer() {
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port: 5000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);

  return { server, app };
}

startApolloServer();
