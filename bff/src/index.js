import express from "express";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";

const developers = [
  {
    name: "Joe Burton",
    skills: "JavaScript, React, HTML, CSS",
  },
  {
    name: "James Brown",
    skills: "Java, MYSQL",
  },
  {
    name: "Bill Smith",
    skills: "PHP, MYSQL, HTML",
  },
];

const technologies = [
  { type: "JavaScript" },
  { type: "React" },
  { type: "HTML" },
  { type: "CSS" },
  { type: "Java" },
  { type: "MYSQL" },
  { type: "PHP" },
];

const typeDefDevelopers = `
  extend type Query {
    developers: [Developer]
  }

  type Developer {
    name: String
    skills: String
  }
`;

const typeDefTechnologies = `
  extend type Query {
    technologies: [Technologies]
  }

  type Technologies {
    type: String
  }
`;

const typeDef = `
  type Query
`;

const typeDefs = [typeDef, typeDefDevelopers, typeDefTechnologies];

// The resolvers
const developersResolver = {
  Query: { developers: () => developers },
};

const technologiesResolver = {
  Query: { technologies: () => technologies },
};

const resolvers = [developersResolver, technologiesResolver];

async function startApolloServer() {
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port: 4001 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);

  return { server, app };
}

startApolloServer();