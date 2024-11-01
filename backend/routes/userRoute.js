import express from 'express';
import { validation } from '../middilewres/validate.js';
import { userRegister } from '../validation/userValidation.js';
import { UserController } from '../controllers/index.js';

const router = express.Router();


// Get all users route
router.route('/').get(UserController.getAllUsers); 

// // User registration route
router.route('/')
  .post( userRegister, validation , UserController.createUser); 

// // Get user profile route
router.route('/:id')
  .get(UserController.getProfile); 

// // Update user route
router.route('/:id')
  .put(UserController.updateUser); 

// // Delete user route
router.route('/:id')
  .delete(UserController.deleteUser); 

export default router;
