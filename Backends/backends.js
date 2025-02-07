// import express from "express"
// import sqlite from "sqlite3"
// import cors from "cors"



// const app = express()

// app.use(express.json())

// app.use(cors())

// app.listen(3002, () => {
//     console.log("listening in port 3002")
// })

// let db = new sqlite.Database("database.db", (err) => {
//     if(err)
//     {
//         console.error(err.message);
//     }
//       console.log("Connected to the access database.");
// })
//  console.log("j")
// console.log(sqlite)

// app.post('/register', (req, res) => {

//     const { nom, email, motdepasse } = req.body;
//     db.run("INSERT INTO users (nom, email, motdepasse) VALUES (?, ?, ?)",
//       [nom, email, motdepasse],
//       (err) => {
//         if (err) {
            
//           console.error(err); 
  
//           return res.status(500).json({ 
//    success: false, message: "Erreur lors de l'inscription" });
//         }
//         res.json({ success: true, message: 'Utilisateur créé avec succès' });
//       }
//     );
// })
import { createRequire } from "module";
import sqlite from "sqlite3"

const require = createRequire(import.meta.url);

const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  next();
});

app.use(express.json({limit: '10mb'}))

 let db = new sqlite.Database("database.db", (err) => {
     if(err)
     {
         console.error(err.message);
     }
       console.log("Connected to the access database.");
 })


 app.post('/register', (req, res) => {

    const { nom, email, motdepasse } = req.body;
    db.run("INSERT INTO users (nom, email, motdepasse) VALUES (?, ?, ?)",
      [nom, email, motdepasse],
      (err) => {
        if (err) {
            
          console.error(err); 
  
          return res.status(500).json({ 
   success: false, message: "Erreur lors de l'inscription" });
        }
        res.json({ success: true, message: 'Utilisateur créé avec succès' });
        
      }
    );
})

app.listen(3002, () => console.log("Listening at port 3002"))
