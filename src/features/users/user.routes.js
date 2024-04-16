import express from 'express'
import UserController from './user.controller.js';

const userController = new UserController()

const router = express.Router();

router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)


export default router;