import express from 'express'
import bodyParser from 'body-parser';

// User defined import statements
import postRouter from './src/features/posts/post.routes.js'
import userRouter from './src/features/users/user.routes.js'

const server = express();

server.use(bodyParser.json())

server.use('/api/post', postRouter)
server.use('/api/user', userRouter)

server.listen(3300, () => {
    console.log('Server is listening on route 3300');
})