import classes from './NewPost.module.css';

function NewPost(onTextChange, onAuthorChange, onCancel) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onTextChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel} props>CAncle</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;