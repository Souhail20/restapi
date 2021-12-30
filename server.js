const express = require('express');
const app = express();
const connectDB = require('./DB/connectDB');
const router = require('./routes/userRouter')
const port = process.env.PORT || 4000;
app.use(express.json());
connectDB();
app.use('/api',router)

app.listen(port,(err)=>err?console.log(err): console.log("server is running on port 4000"));
