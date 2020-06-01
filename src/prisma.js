import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  fragmentReplacements
})

export { prisma as default }

// prisma.query, prisma.mutation, prisma.subscription, prisma.exists

// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({ id: authorId })
//
//   if (!userExists) {
//     throw new Error('User not found')
//   }
//
//   const post = await prisma.mutation.createPost({
//     data: {
//       ...data,
//       author: {
//         connect: {
//           id: authorId
//         }
//       }
//     }
//   }, '{ author { id name email posts { id title published } } }')
//
//   return post.author
// }
//
// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId })
//
//   if (!postExists) {
//     throw new Error('Post not found')
//   }
//
//   const post = await prisma.mutation.updatePost({
//     where: { id: postId },
//     data
//   },'{ author { id name email posts { id title published } } }')
//
//   return post.author
// }
//
// updatePostForUser("ckao3smns0e5r0763gf8jku5m", { published: true }).then(data => {
//   console.log(JSON.stringify(data, undefined, 2))
// }).catch(error => {
//   console.log(error.message)
// })

// createPostForUser("ckaj8i68u00or0763nlzk3m25",{
//   title: 'Great books to read',
//   body: 'The War of Art',
//   published: true
// }).then(user => {
//   console.log(JSON.stringify(user, undefined, 2))
// }).catch(error => {
//   console.log(error.message)
// })
