import React, { memo } from 'react'
import classes from './newMessage.module.scss'


const NewMessage = () => {
  return (
    <div className={classes.NewMessage}>Новые сообщения</div>
  )
}

export default memo(NewMessage)
