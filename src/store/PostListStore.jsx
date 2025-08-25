import React, { useReducer, createContext } from 'react';

// ✅ Move default list above so it's defined before useReducer
const defaultPostList = [
  {
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi Friends I am going to Mumbai for my vacation. Hope to enjoy a lot.',
    reaction: 3,
    userid: 'user-9',
    tags: ['vacation', 'Mumbai', 'Enjoy'],
  },
  {
    id: '2',
    title: 'Learning React Js',
    body: 'Hi Friends I am currently learning the React library and making real-life projects.',
    reaction: 12,
    userid: 'user-12',
    tags: ['react', 'learn', 'projects'],
  },
];

// ✅ Correct context name and export
export const PostListContext = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

// ✅ Reducer logic
const postlistReducer = (currPostList, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return currPostList.filter(post => post.id !== action.payload);
    case 'ADD_POST':
      return [action.payload, ...currPostList];
    default:
      return currPostList;
  }
};


// ✅ Wrapper Provider Component
const PostListStore = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(postlistReducer, defaultPostList);

  const addPost = (userid,postTitle,postBody,reactions,tags) => {
    // Add logic here
    const newPost = {
    id: Date.now().toString(),
    title: postTitle,
    body: postBody,
    reaction: Number(reactions),
    userid,
    tags,
  };
  dispatchpostlist({ type: 'ADD_POST', payload: newPost });
  };

  const deletePost = (postid) => {
    // Add logic here
    dispatchpostlist({
      type: 'DELETE_POST',
      payload: postid,
    });
  };

  return (
    <PostListContext.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export { PostListStore as PostListProvider };