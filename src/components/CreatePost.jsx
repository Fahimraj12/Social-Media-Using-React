import React, { useContext, useRef } from 'react'
import { PostListContext } from '../store/PostListStore';

const CreatePost = () => {

  const {addPost} = useContext(PostListContext);
  const useridElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userid = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    useridElement.current.value = "";
    postBodyElement.current.value = "";
    postTitleElement.current.value ="";
    reactionsElement.current.value ="";
    tagsElement.current.value ="";

    addPost(userid,postTitle,postBody,reactions,tags);
  };
  return (
    <div>
      <form className='create-post' onSubmit={handleSubmit}>
        <div className="mb-3">
  <label htmlFor="userid" className="form-label">Enter Your user id here</label>
  <input type="text" className="form-control" id="userid" ref={useridElement} placeholder='Your user id.' />
</div>
<div className="mb-3">
  <label htmlFor="title" className="form-label">Post Title</label>
  <input type="text" className="form-control" id="title" ref={postTitleElement} placeholder='how are you feeling today..' />
</div>
<div className="mb-3">
  <label htmlFor="body" className="form-label">Post Content</label>
  <textarea className="form-control" id="body" ref={postBodyElement} placeholder='Tell us more about it'></textarea>
</div>
<div className="mb-3">
  <label htmlFor="reactions" className="form-label">Number of Reactions</label>
  <input type="number" className="form-control" id="reactions" ref={reactionsElement} placeholder='How many people reacted to this post' />
</div>
<div className="mb-3">
  <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
  <input type="text" className="form-control" id="tags" ref={tagsElement} placeholder='Please enter tags using space' />
</div>
        <button type="submit" className="btn btn-primary" >Post</button>
      </form>
    </div>
  )
}

export default CreatePost
