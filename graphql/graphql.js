import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schemas/index.js';
import resolvers from './resolvers/index.js';

export default makeExecutableSchema({typeDefs, resolvers});