require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/userRoute')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/',router)


mongoose.connect(process.env.MONGO_URL)
.then(() => {
        console.log("Connected")
})
.catch((error) => console.log('NOt Connected ',error))

