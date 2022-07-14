import { technologies, developers } from '../data';

const developersResolver = {
  Query: {
    developers: () => {
      console.log(developers);
      return developers;
    },
  },
};

const technologiesResolver = {
  Query: {
    technologies: () => technologies,
  },
};

export const resolvers = [developersResolver, technologiesResolver];
