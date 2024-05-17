import classes from './PostList.module.css'
import Post from "./Post";
import NewPost from "./NewPost.jsx";
import Modal from './Modal.jsx';
import { useState } from 'react';

export default function PostList({isVisible, onStopShowing}){
  
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    fetch('http://localhost:8080/posts',
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
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
    {posts.length > 0 && (
      <ul className={classes.posts}>
      {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/> )}
    </ul>
    )}
    {posts.length === 0 && (
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h2>There are no props yet.</h2>
        <p>Start adding some!</p>
      </div>
    )}
    </>   
  )
}