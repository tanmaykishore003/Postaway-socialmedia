import express from 'express'
import UserController from './user.controller.js';

const userController = new UserController()

const router = express.Router();

router.post('/signup', userController.registerUser)
router.post('/signin', userController.loginUser)


export default router;