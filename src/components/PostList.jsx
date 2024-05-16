import classes from './PostList.module.css'
import Post from "./Post";
import NewPost from "./NewPost.jsx";

export default function PostList(props){
  return(
    <>
    <NewPost/>

    <ul className={classes.posts}>
      <Post author='Daria' body='me'/>
      <Post author='Fed' body='he'/>
    </ul>
    </>   
  )
}