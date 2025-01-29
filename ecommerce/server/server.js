import express from "express";
import mysql from "mysql2";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // Allow CORS for all origins (if needed, configure this for specific origins)
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 3000;


// Establish connection to database using a connection pool
const pool = mysql.createPool({
    host: "sql5.freemysqlhosting.net",
    user: "sql5760049",
    password: "FCsb3ilM61",
    database: "sql5760049",
});

// Test MySQL connection when the server starts
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit the process if there's a connection error
    }
    console.log("Connected to the MySQL database!");
    connection.release(); // Release the connection back to the pool
});

// Display all products in the table
app.get("/products", (req, res) => {
    pool.query("SELECT image, name, price, description FROM Gaming_Products", function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database query failed" });
        }

        res.json(result);
        console.log(result);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
