import React from 'react'
import NewMessage from '../NewMessage/NewMessage'
import SystemMessage from '../SystemMessage/SystemMessage'
import Time from '../Time/Time'


const Message = ({ chat }) => {

  return (
    <div>
      <NewMessage />
      <SystemMessage time={chat.created_at}/>
      <Time />
    </div>
  )
}

export default Message
