import React, { useState } from 'react'
import classes from './input.module.scss'
import Pin from '../../img/icons/Attach/20/Regular.svg'
import Send from '../../img/icons/Buttons.svg'


const Input = () => {
  const [value, setValue] = useState('')

  const getValue = (event) => {
    setValue(event.target.textContent)
  }
  
  const onMessageSubmit = () => {
    document.querySelector('.input_Input__area__aaI6V').textContent = ''
    setValue('')
  }

  return (
    <div className={classes.Input}>
      <div className={classes.Input__area} contentEditable='true' onBlur={getValue} />
      {!value && <span className={classes.Input__placeholder}>Type messsage</span>}
      <form className={classes.Input__btn} onSubmit={onMessageSubmit}>
        <input type="file" id="pin"/>
        <label htmlFor="pin" className={classes.btn__send}><img src={Pin} alt="Pin"/></label>
        <img className={classes.btn__send} src={Send} alt="Send" onClick={onMessageSubmit}/>
      </form>
    </div>
  )
}

export default Input
