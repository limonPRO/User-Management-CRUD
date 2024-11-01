
import httpStatus from 'http-status-codes';
import { UserService } from '../services/index.js';

// Get all users
export const getAllUsers = async (req, res) => {
    const response = await UserService.getAllUsers(); // Call the service to get all users
    res.status(response.code).send(response); // Send response back to the client
  };

// Get user profile
export const getProfile = async (req, res) => {
  const id = req.params.id; // Get user ID from request parameters
  const response = await UserService.getProfile(id); // Call the service to get profile
  res.status(response.code).send(response); // Send response back to the client
};

// Create user
export const createUser = async (req, res) => {
  const { first_name, last_name , display_name , email , dob , phone  } = req.body; // Get data from request body
  const response = await UserService.createUser({ first_name, last_name , display_name , email , dob , phone }); // Call service to create user
  res.status(response.code).send(response); // Send response back to the client
};

// Update user
export const updateUser = async (req, res) => {
  const id = req.params.id; // Get user ID from request parameters
  const { first_name, last_name , display_name , email , dob , phone } = req.body; // Get data from request body
  const response = await UserService.updateUser(id, { first_name, last_name , display_name , email , dob , phone }); // Call service to update user
  res.status(response.code).send(response); // Send response back to the client
};

// Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id; // Get user ID from request parameters
  const response = await UserService.deleteUser(id); // Call service to delete user
  res.status(response.code).send(response); // Send response back to the client
};
