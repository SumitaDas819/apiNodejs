const express = require('express');
const app = express();
const connection=require('./config/db')
const dotenv = require('dotenv')
dotenv.config()


app.get("/", (req, res) => {
    res.send("api running success first api");
})

app.listen(process.env.DB_PORT || 4000,(error)=>{
    if(error) throw error
    console.log(`server running ${process.env.DB_PORT}`)
});

