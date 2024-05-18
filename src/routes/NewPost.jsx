import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

function NewPost({ onAddPost}) {

  const [enteredText, setEnteredText] = useState('');
  const [author, setAuthor] = useState('');

  function changeBodyHandler(event){
    setEnteredText(event.target.value);
    console.log('cto')
  }

  function changeAuthorHandler(event){
    setAuthor(event.target.value);
    console.log(event.target.value)
  }

  function submitHandler(event){
    event.preventDefault();
    const postData = {
      body: enteredText,
      author: author
    }
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <Link to='..' type='button'>CAncle</Link>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;