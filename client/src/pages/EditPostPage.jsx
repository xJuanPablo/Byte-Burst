import React, {useEffect, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';

function EditPostPage() {
  const {id} = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [redirect, setRedirect] = useState(false)
  
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
    .then(res => {
      res.json().then(postInfo =>{
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary)
      })
    })
  },[]);

  const updatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if(imgFile?.[0]){

      data.set('file', imgFile[0]);

    }
    const res = await fetch(`http://localhost:4000/post`, {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if(res.ok){
      setRedirect(true);
    };
  }

  if(redirect){
    return <Navigate to={`/post/${id}`} />
  }
  return (
    <div className='postForm'>
      <form onSubmit={updatePost}>
        <input type="title" placeholder={'Title'} value={title} onChange={e => setTitle(e.target.value)}/>
        <input type='summary' placeholder={`What's on your mind?`} value={summary} onChange={e => setSummary(e.target.value)}></input>
        <input type="file" onChange={e => setImgFile(e.target.files)}/>
        <Editor onChange={setContent} value={content}/>
        <button className='postBtn'>Update Post</button>
      </form>
    </div>
  )
}

export default EditPostPage;