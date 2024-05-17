import classes from './PostList.module.css'
import Post from "./Post";
import NewPost from "./NewPost.jsx";
import Modal from './Modal.jsx';
import { useState } from 'react';

export default function PostList({isVisible, onStopShowing}){
  
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return(
    <>
    {isVisible && (
      <Modal onHide={onStopShowing}>
      <NewPost 
        onCancel={onStopShowing} onAddPost={addPostHandler}/>
         </Modal>
    )}
    <ul className={classes.posts}>
      <Post author='me' body='me'/>
     
    </ul>
    </>   
  )
}