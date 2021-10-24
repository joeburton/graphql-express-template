import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Technologies from "./Technologies";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Technologies />
      </ApolloProvider>
    </div>
  );
}

export default App;
