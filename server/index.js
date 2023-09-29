const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const fs =require('fs')



require('dotenv').config()

const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET_KEY;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

app.use('/uploads', express.static(`${__dirname}/uploads`))


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

app.post('/post', upload.single('file') , async (req,res) => {
  const {originalname, path} = req.file;
  const parts = originalname.split('.');
  const fileType = parts[parts.length - 1];
  const UpdatedPath = `${path}.${fileType}`;
  fs.renameSync(path,UpdatedPath)

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) =>{
    if (err) throw err;
    const {title,summary,content} = req.body;
    const postInfo = await Post.create({
      title,
      summary,
      content,
      img: UpdatedPath,
      author:info.id,
    })
    res.json(postInfo)
  });
});

app.put('/post', upload.single('file'), async (req, res) => {
  try {
    let updatedPath = null;

    if (req.file) {
      const { originalname, path } = req.file;
      const parts = originalname.split('.');
      const fileType = parts[parts.length - 1];
      updatedPath = `${path}.${fileType}`;
      fs.renameSync(path, updatedPath);
    }

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;

      const { id, title, summary, content } = req.body;
      const postInfo = await Post.findById(id);

      if (!postInfo) {
        return res.status(404).json({ error: 'Post not found' });
      }

      const postAuthor = JSON.stringify(postInfo.author) === JSON.stringify(info.id);

      if (!postAuthor) {
        return res.status(403).json({ error: 'Invalid Author' });
      }

      await Post.findOneAndUpdate(
        { _id: id },
        {
          title,
          summary,
          content,
          img: updatedPath || postInfo.img,
        },
        { new: true } 
      );

      res.json({ success: true });
    });
  } catch (error) {
    console.error('Server-side error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/post', async (req,res) => {
  res.json(
  await Post.find()
  .populate('author', ['username'])
  .sort({createdAt: -1})
  .limit(10)
  );
});

app.get('/post/:id', async (req,res) => {
  const {id} = req.params;
  res.json(await Post.findById(id)
  .populate('author', ['username']))
})

app.listen(4000);