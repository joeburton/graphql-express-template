import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Technologies from "./components/Technologies";
import Developers from "./components/Developers";

const client = new ApolloClient({
  uri: "http://localhost:5001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Technologies />
        <Developers />
      </ApolloProvider>
    </div>
  );
}

export default App;
