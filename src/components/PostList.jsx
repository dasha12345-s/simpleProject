import classes from './PostList.module.css'
import Post from "./Post";
import NewPost from "./NewPost.jsx";
import Modal from './Modal.jsx';

export default function PostList({isVisible, onStopShowing}){

  return(
    <>
    {isVisible && (
      <Modal onHide={onStopShowing}>
      <NewPost 
        onCancel={onStopShowing}/>
         </Modal>
    )}
    <ul className={classes.posts}>
      <Post author='me' body='me'/>
     
    </ul>
    </>   
  )
}