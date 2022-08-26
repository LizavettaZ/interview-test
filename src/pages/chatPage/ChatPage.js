import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import Message from '../../components/Message/Message'
import NewMessage from '../../components/NewMessage/NewMessage'
import SystemMessage from '../../components/SystemMessage/SystemMessage'
import classes from './chatPage.module.scss'
import Input from '../../components/Input/Input'


const ChatPage = () => {
  const userChat = useSelector(state => state.chats.chat)

  return (
    <div className={classes.chatPage}>
      {userChat.reverse().map((chat) => (
        <div key={chat.id}>
          {<SystemMessage time={chat.created_at} />}
          {chat.is_new && <NewMessage />}
          <Message chat={chat} />
        </div>
      ))}
      <Input />
    </div>
  )
}

export default memo(ChatPage)
