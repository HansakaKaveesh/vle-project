import { db } from '../../../lib/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullname, username, email, password, role } = req.body;

    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into database
      const query = `
        INSERT INTO users (fullname, username, email, password, role) 
        VALUES (?, ?, ?, ?, ?)
      `;
      const values = [fullname, username, email, hashedPassword, role];

      await db.query(query, values);
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error registering user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
