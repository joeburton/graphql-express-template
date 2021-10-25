import { technologies, developers } from "../data";

const developersResolver = {
  Query: { developers: () => developers },
};

const technologiesResolver = {
  Query: { technologies: () => technologies },
};

export const resolvers = [developersResolver, technologiesResolver];
