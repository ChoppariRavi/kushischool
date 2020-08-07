const express = require("express");
const next = require("next");
const { MongoClient } = require("mongodb");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Connect MongoDB
const PASSWORD = "Mango@1239rs";
const DB = "school-db";
const uri =
  "mongodb+srv://ravi:" +
  PASSWORD +
  "@cluster0.pfi6o.mongodb.net?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db(DB);
    const collection = database.collection("rhymes");
    const rhymes = await collection.find().toArray();
    
    // Run server
    app
      .prepare()
      .then(() => {
        const server = express();
        // Get Rhymes
        server.get("/api/rhymes", (req, res) => {
          console.log(rhymes[0]);
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(rhymes[0]));
        });

        server.get("*", (req, res) => {
          return handle(req, res);
        });

        server.listen(3000, (err) => {
          if (err) throw err;
          console.log("> Ready on http://localhost:3000");
        });
      })
      .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
      });
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
