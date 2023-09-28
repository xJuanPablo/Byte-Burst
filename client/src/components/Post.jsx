import React, { useEffect } from 'react'

function Post() {

  useEffect(() => {
    fetch('/post').then(res => {
      res.json().then(posts =>{
        console.log(posts)
      });
    })

  })

  return (
    <div id="homePost">


      <div className='post'>
        <div className="imgContainer">
          <img src="https://m.media-amazon.com/images/M/MV5BZjk1NTA3NjQtMmY2Ni00MjA4LWExOGItODUzZTkyZDY3MDRjXkEyXkFqcGdeQW1yb2Njbw@@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" className='postImg'/>
        </div>
        <div className="content">
          <h2 className='postH2'>Community</h2>
          <p className='postText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus officiis quis dolores possimus minima et! Accusamus cumque nostrum doloribus, blanditiis, atque nobis sunt, dolor cupiditate porro maxime reprehenderit obcaecati sit.</p>
          <p className='postInfo'>
            <a href="#" className='postAuthor'>xJuanPablo</a>
            <time>2023-09-18</time>
          </p>
        </div>
      </div>


    </div>
  )
}

export default Post