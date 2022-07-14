"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("@graphql-tools/schema");
const index_js_1 = require("./typedefs/index.js");
const index_js_2 = require("./resolvers/index.js");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const port = '5001';
        const httpServer = (0, http_1.createServer)(app);
        const schema = (0, schema_1.makeExecutableSchema)({ typeDefs: index_js_1.typeDefs, resolvers: index_js_2.resolvers });
        const server = new apollo_server_express_1.ApolloServer({
            schema,
        });
        yield server.start();
        server.applyMiddleware({ app });
        yield new Promise((resolve, reject) => {
            httpServer.listen(port).once('listening', resolve).once('error', reject);
        });
        console.log(`🚀 Server ready at http://localhost:5001${server.graphqlPath}`);
        process.argv.forEach((val, index) => {
            console.log(`${index}: ${val}`);
        });
        return { server, app };
    });
}
startServer();
