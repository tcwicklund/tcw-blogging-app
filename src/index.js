import '@babel/polyfill/noConflict'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'

import { resolvers, fragmentReplacements } from './resolvers/index'
import prisma from './prisma'

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: resolvers,
    fragmentReplacements: fragmentReplacements,
    context(request) {
      return {
        db,
        pubsub,
        prisma,
        request
      }
    }
})

const opts = {
  port: process.env.PORT
}

server.start(opts, () => {
    console.log(`Server is running`)
})
