import { ApolloServer } from "apollo-server";
import { AuthSource } from './dataSources';
import typeDefs from './gqlTypes';
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const auth = new AuthSource();

    let user: User | null;

    if (!req.headers.authorization) {
      user = null;  
    } else {
      user = auth.getSession(req.headers.authorization);
    }

    return {
      user
    } as ApolloContext;
  },
})

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
})