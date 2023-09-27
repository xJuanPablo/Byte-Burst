const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { error } = require('console');
const cookieParser = require('cookie-parser');
require('dotenv').config()

const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET_KEY;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser())

mongoose.connect(process.env.MONGO_DB);

app.post('/register', async (req, res) => {
  const {username, password} = req.body;
  try {
    const userInfo = await User.create({
      username,
      password:bcrypt.hashSync(password, salt)})
    res.json(userInfo);
  } catch(e){
    res.status(400).json(e);
  }
})

app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  try {
  const userInfo = await User.findOne({ username });

  if (!userInfo) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }


  const isPasswordValid = bcrypt.compareSync(password, userInfo.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid username or password' });
  } 

  jwt.sign({username, id:userInfo._id}, secret,   {}, (err, token) => {
      if(err) throw err;
      res.cookie('token', token).json({
        id:userInfo._id,
        username,
      });
    })
} catch (e) {
  res.status(400).json(e);
}
});

app.get('/profile', (req,res) =>{
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) =>{
    if (err) throw err;
    res.json(info);
  });
});

app.post('logout', (req,res) => {
  res.cookie('token', '').json('ok');
});

app.listen(4000);