
import httpStatus from 'http-status-codes';
import dbConnection from '../config/db.js';

// Fetch all users
export const getAllUsers = async () => {
  try {
    const [users] = await dbConnection.query('SELECT * FROM users');
    return {
      code: httpStatus.OK,
      success: true,
      message: "fetched all user",
      data: users || [], 
    };
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message,
    };
  }
};

// Fetch user profile by ID
export const getProfile = async (id) => {
  try {
    const [user] = await dbConnection.query('SELECT * FROM users WHERE id = ?', [id]);
   
    // If user not found
    if (user.length === 0) {
      return {
        code: httpStatus.NOT_FOUND,
        success: false,
        message: "No user found",
        data: [],
      };
    }
    
    return {
      code: httpStatus.OK,
      success: true,
      message: "user created successfully",
      data: user[0],
    };
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message,
    };
  }
};

// Create user
export const createUser = async ({first_name, last_name , display_name , email , dob , phone}) => {
  try {
    const [result] = await dbConnection.execute('INSERT INTO users (first_name, last_name, display_name, email, dob, phone) VALUES (?, ?, ?, ?, ?, ?)', [first_name, last_name, display_name, email, dob, phone]);
    return {
      code: httpStatus.CREATED,
      success: true,
      data: { id: result.insertId, first_name, last_name , display_name , email , dob , phone },
    };
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message,
    };
  }
};

// Update user
export const updateUser = async (id, { first_name, last_name , display_name , email , dob , phone }) => {
  try {
    const [result] = await dbConnection.query('UPDATE users SET first_name = ?, last_name = ?, display_name = ?, email = ?, dob = ?, phone=?  WHERE id = ?', [first_name, last_name, display_name, email, dob, phone , id]);
    
    if (result.affectedRows === 0) {
      return {
        code: httpStatus.NOT_FOUND,
        success: false,
        message: "User not found",
      };
    }
    
    return {
      code: httpStatus.OK,
      success: true,
      message: "user updated successfully",
      data: { id, first_name, last_name , display_name , email , dob , phone },
    };
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message,
    };
  }
};

// Delete user
export const deleteUser = async (id) => {
  try {
    const [result] = await dbConnection.query('DELETE FROM users WHERE id = ?', [id]);
    
    // If affectedRows is 0, no user was found with the given id
    if (result.affectedRows === 0) {
      return {
        code: httpStatus.NOT_FOUND,
        success: false,
        message: "User not found",
      };
    }
    
    return {
      code: httpStatus.OK,
      success: true,
      message: "User deleted successfully",
      // affectedRows: result.affectedRows, 
    };
  } catch (error) {
    return {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message,
    };
  }
};

