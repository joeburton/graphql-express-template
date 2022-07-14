import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';

async function startServer() {
  const app = express();
  const port = '5001';

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve, reject) => {
    httpServer.listen(port).once('listening', resolve).once('error', reject);
  });
  console.log(`🚀 Server ready at http://localhost:5001${server.graphqlPath}`);

  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

  return { server, app };
}

startServer();
