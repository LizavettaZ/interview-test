import React, { memo } from 'react'
import classes from '../Header/header.module.scss'
import Chat from '../../img/icons/Chat.svg'


const Header = ({ title = 'All chats', icon = false }) => {
  return (
    <div className={classes.Header}>
      {icon && <img src={Chat} alt="Chat" />}
      {title}
    </div>
  )
}

export default memo(Header)
