import classes from './PostList.module.css'
import Post from "./Post";
import NewPost from "./NewPost.jsx";
import { useState } from 'react';

export default function PostList(props){
  const [enteredText, setEnteredText] = useState('');
  const [author, setAuthor] = useState('');
  
  function changeHandler(event){
    setEnteredText(event.target.value);
  }

  function changeAuthorHandler(event){
    setAuthor(event.target.value);
  }

  return(
    <>
    <NewPost onTextChange={changeHandler} onAuthorChange={changeAuthorHandler}/>
    <ul className={classes.posts}>
      <Post author={author} body={enteredText}/>
      <Post author={author} body={enteredText}/>
    </ul>
    </>   
  )
}