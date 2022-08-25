import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import Message from '../../components/Message/Message'


const ChatPage = () => {
  const userChat = useSelector(state => state.chats.chat)

  return (
    <>
      {userChat.map((chat) => (
        <Message key={chat.id} chat={chat} />
      ))}
    </>
  )
}

export default memo(ChatPage)