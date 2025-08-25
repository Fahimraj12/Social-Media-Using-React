import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import './Post.css'
import  { PostListContext } from '../store/PostListStore';

const Post = ({ id, title, body, tags, reaction }) => {

  const { deletePost } =  useContext(PostListContext);

  return (
    <div>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> deletePost(id)}><MdDelete />
            </span>
          </h5>
          <p className="card-text">{body} </p>
          {tags.map((tag, idx) => (<span key={tag} className="badge rounded-pill text-bg-primary hash">#{tag} </span>))}
          <div className="alert alert-success reaction" role="alert">
            These posts is reacted by {reaction} people
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
