const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ByteBurst:k30x43u46R2OjU6A@cluster0.yjrqyld.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
  const {username, password} = req.body;
  try {
    const userInfo = await User.create({username, password})
    res.json(userInfo);
  } catch(e){
    res.status(400).json(e)
  }
})

app.listen(3001)
// ByteBurst
//mongodb+srv://ByteBurst:k30x43u46R2OjU6A@cluster0.yjrqyld.mongodb.net/?retryWrites=true&w=majority