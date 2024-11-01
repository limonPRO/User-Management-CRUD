import dotenv from 'dotenv';
import app from './app.js';
import { connectToMySQL } from './config/db.js';
// import { connectDB } from './config/db.js';

dotenv.config();

const port = process.env.PORT || 5000;

// DB connection
// connectDB();
connectToMySQL()

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
