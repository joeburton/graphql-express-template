"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const data_1 = require("../data");
const developersResolver = {
    Query: {
        developers: () => {
            console.log(data_1.developers);
            return data_1.developers;
        },
    },
};
const technologiesResolver = {
    Query: {
        technologies: () => data_1.technologies,
    },
};
exports.resolvers = [developersResolver, technologiesResolver];
