// lib/db.js
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost', // Update with your database host
  user: 'root', // Update with your database user
  password: '', // Update with your database password
  database: 'users_db', // Update with your database name
});
