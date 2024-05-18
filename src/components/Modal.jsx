import { useNavigate } from 'react-router-dom'

import classes from './Modal.module.css'

export default function Modal({children}){
  const nav = useNavigate();
  
  function closeHandler(){
    nav('/')
  }
  return(
    <>
    <div className={classes.backdrop} onClick={closeHandler}> 
      <dialog open className={classes.modal}>
      {children}
      </dialog>
    </div>
    </>
  )
}