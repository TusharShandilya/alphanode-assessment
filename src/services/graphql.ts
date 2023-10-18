import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import config from "../config";

export const link = createHttpLink({
  uri: config.BASE_URL,
  headers: {
    Authorization: config.secrets.GQL_TOKEN,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
