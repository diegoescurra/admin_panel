import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
    connectionString : process.env.DATABASE,
    ssl: true
});

export default pool;