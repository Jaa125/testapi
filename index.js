const express = require('express')
const axios = require('axios');
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRout = require('./routes/auth')
const userRout = require('./routes/users')
const regionRout = require('./routes/regions')
// const fbapiRout = require('./routes/fbapi')


dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})
.then(console.log('connected to mongoDB'))
.catch(err => console.log(err));




app.use("/api/auth", authRout)
app.use("/api/users", userRout)
app.use("/api/regions", regionRout)

// app.use("/api/categories", categoryRout)



app.listen(process.env.PORT || 5000, ()=>{
    console.log('Backend is running')
});