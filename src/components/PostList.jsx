import React, { useContext } from 'react';
import Post from './Post';
import { PostListContext as PostListData } from '../store/PostListStore';

const PostList = () => {
  const { postlist } = useContext(PostListData); // ✅ fixed casing
  console.log(postlist);

  return (
    <>
      {postlist.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          reaction={post.reaction}
          userid={post.userid}
          tags={post.tags}
        />
      ))}

    </>
  );
};

export default PostList;
