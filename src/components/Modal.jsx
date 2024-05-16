import classes from './Modal.module.css'

export default function Modal({children, onHide}){
  return(
    <>
    <div className={classes.backdrop} onClick={onHide}>
      <dialog open className={classes.modal}>
      {children}
      </dialog>
    </div>
    </>
  )
}