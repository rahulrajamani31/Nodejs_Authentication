const connectDB = require('./Database/db')
const express= require('express');
const User = require('./Routes/UserRoute')
const uploaddata =require('./Routes/upload')
connectDB();
const app = express()
app.use(express.json())
app.use(User)
app.use(uploaddata)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in env mode  on tree on port ${PORT}`))
