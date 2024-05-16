import classes from './PostList.module.css'
import Post from "./Post";

export default function PostList(props){
  return(
    <ul className={classes.posts}>
      <Post author='Daria' body='me'/>
      <Post author='Fed' body='he'/>
    </ul>
   
  )
}