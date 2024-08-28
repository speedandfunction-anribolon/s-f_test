import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { initDataBase } from './db/connection';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

const app = express();

const startServer = async () => {
  try {
    await initDataBase();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(
        `Server is running on http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();
