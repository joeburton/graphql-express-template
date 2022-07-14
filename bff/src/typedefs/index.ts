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

export const typeDefs = [typeDef, typeDefDevelopers, typeDefTechnologies];
