import { body, param } from 'express-validator';

// Validation for user
export const userRegister = [
  body('first_name')
    .notEmpty().withMessage('first_name is required')
    .isLength({ min: 3 }).withMessage('first_name must be at least 3 characters long'),

  body('last_name')
    .notEmpty().withMessage('last_name is required')
    .isLength({ min: 3 }).withMessage('last_name must be at least 3 characters long'),

  body('display_name')
    .notEmpty().withMessage('display_name is required')
    .isLength({ min: 3 }).withMessage('display_name must be at least 3 characters long'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),

  body('dob')
    .notEmpty().withMessage('Date of birth (dob) is required')
    .isDate().withMessage('Invalid date format for dob'), 

  body('phone')
    .notEmpty().withMessage('Phone number is required')
    .isMobilePhone('any').withMessage('Invalid phone number format'), 
];

// Validation for updating users
export const updateUserValidation = [
  param('id').isInt().withMessage('User ID must be an integer'),

  body('first_name')
    .optional() 
    .isLength({ min: 3 }).withMessage('first_name must be at least 3 characters long'),

  body('last_name')
    .optional() 
    .isLength({ min: 3 }).withMessage('last_name must be at least 3 characters long'),

  body('display_name')
    .optional() 
    .isLength({ min: 3 }).withMessage('display_name must be at least 3 characters long'),

  body('email')
    .optional() 
    .isEmail().withMessage('Invalid email format'),

  body('dob')
    .optional() 
    .isDate().withMessage('Invalid date format for dob'),

  body('phone')
    .optional() 
    .isMobilePhone('any').withMessage('Invalid phone number format'),
];
