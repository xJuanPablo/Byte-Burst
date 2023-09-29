import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

function PostPage() {
  const {id} = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
    .then(res => {
      res.json().then(postInfo => {
        setPostInfo(postInfo)
      })
    })
  },[])
  //TODO: Create page for bad request and navigate there
  if(!postInfo) return '';
  return (
    <div>

      <div dangerouslySetInnerHTML={{__html:postInfo.title}} />

      {userInfo.id === postInfo.author._id && (
        <div> 
          <Link to={`/edit/${postInfo._id}`}>Edit Post</Link>
        </div>
      )}
      <img src={`http://localhost:4000/${postInfo.img}`} alt="" />

      <div dangerouslySetInnerHTML={{__html:postInfo.summary}} />

      <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}

export default PostPage