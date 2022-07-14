"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
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
exports.typeDefs = [typeDef, typeDefDevelopers, typeDefTechnologies];
