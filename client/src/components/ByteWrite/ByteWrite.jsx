import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom';

const modules ={
  toolbar: [
  [{'header': [1,2,false]}],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ['link', 'image'],
  ['clean']
  ]
}
function ByteWrite() {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [redirect, setRedirect] = useState(false);

    const createPost = async (e) => {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    e.preventDefault();
    data.set('file', imgFile[0])

    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
    });
    if(response.ok){
      setRedirect(true);
    }
  }


  if(redirect){
    return <Navigate to={'/'} />
  }
  return (
    <div className='postForm'>
      <form onSubmit={createPost}>
        <input type="title" placeholder={'Title'} value={title} onChange={e => setTitle(e.target.value)}/>
        <input type='summary' placeholder={`What's on your mind?`} value={summary} onChange={e => setSummary(e.target.value)}></input>
        <input type="file" onChange={e => setImgFile(e.target.files)}/>
        <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} />
        <button className='postBtn'>Create Post</button>
      </form>
    </div>
  )
}

export default ByteWrite;