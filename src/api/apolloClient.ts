import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Constants from "../utills/Constants";

const httpLink = createHttpLink({
  uri:Constants.API_BASE_URL, // Replace with your API URL
});

const authLink = setContext((_, { headers }) => {

  const token = ""; 
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
