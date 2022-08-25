import React, { memo } from 'react'
import { Avatar } from '../Avatar'
import classes from './chatItemList.module.scss'
import { cutText } from '../../utils/cutText'


const ChatItemList = ({ chat, onClick, isSelected }) => {
  const { avatar, title, last_message } = chat

  const cls = [
    classes.chatItemList,
    isSelected && classes.isSelected
  ]

  return (
    <div className={cls.join(' ')} onClick={onClick}>
      <Avatar src={avatar} size={'md'} />
      <div className={classes.chatItemList__description}>
        <h6>{cutText(title, 35)}</h6>
        <p>{cutText(last_message.message, 70)}</p>
      </div>
    </div>
  )
}

export default memo(ChatItemList)
