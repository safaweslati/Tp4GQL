import { createPubSub, createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import fs from 'fs';
import { Query } from './Resolvers/Query.mjs';
import { Cv } from './Resolvers/Rcv.mjs';
import { data } from './data/data.mjs';
import { Mutation } from './Resolvers/Mutation.mjs';
import { Subscription } from './Resolvers/Subscription.mjs';


const pubSub = createPubSub()
const yoga = createYoga({
   schema: createSchema({
    typeDefs: fs.readFileSync('src/schema/schema.graphql', 'utf-8'),
    resolvers: { Query, Cv, Mutation, Subscription },
    }),
    context: {data, pubSub}
  })


const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})  