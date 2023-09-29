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
        setPostInfo(postInfo);
        console.log(postInfo)
      })
    })
  },[])
  //TODO: Create page for bad request and navigate there
  if(!postInfo) return '';
  return (
    <div id='singlePostBox'>

      <div dangerouslySetInnerHTML={{__html:postInfo.title}} id='singlePostTitle'/>

      <img src={`http://localhost:4000/${postInfo.img}`} id='singlePostImg' alt="" />
      <div>
      <div className='inline'>Written by: </div>
        <div className='inline' dangerouslySetInnerHTML={{__html:postInfo.author.username}}/>
        <div className='inline'> / </div>
          <div className='inline' dangerouslySetInnerHTML={{__html:postInfo.createdAt}}/>
      </div>
      <div dangerouslySetInnerHTML={{__html:postInfo.summary}} id='singPostSummary'/>

      <div dangerouslySetInnerHTML={{__html:postInfo.content}} id='singPostContent'/>

      {userInfo.id === postInfo.author._id && (
        <div> 
          <Link to={`/edit/${postInfo._id}`} className='inline'>Edit Post</Link>
          <div className='inline'></div>
          <div className='inline'>delete</div>
        </div>
      )}


    </div>
  )
}

export default PostPage