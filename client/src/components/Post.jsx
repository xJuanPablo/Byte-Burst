import React from 'react';
import {formatISO9075} from 'date-fns';
import { Link } from 'react-router-dom';

function Post({_id, title, summary, img, content, createdAt, author
}) {
  return (
    <div id="homePost">


      <div className='post'>
        <div className="imgContainer">
          <Link to={`/post/${_id}`} >

          <img src={'http://localhost:4000/'+img} alt="" className='postImg'/>

          </Link>
        </div>
        <div className="content">
          <Link to={`/post/${_id}`} >
            <h2 className='postH2'>{title}</h2>
          </Link>
          <p className='postText'>{summary}</p>
          <p className='postInfo'>
            <a href="#" className='postAuthor'>{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
        </div>
      </div>


    </div>
  )
}

export default Post;