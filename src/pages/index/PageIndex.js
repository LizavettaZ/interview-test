import React, { useState }  from "react"
import ChatItemList from "../../components/ChatItemList/ChatItemList"
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import classes from '../index/pageIndex.module.scss'
import { chat } from '../../store/actions/chats'
import ChatPage from '../chatPage/ChatPage'


export const PageIndex = () => {
  const userChats = useSelector(state => state.chats.chats)
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(null)
  const [chatName, setChatName] = useState('Select Chat...')

  const onChatClick = (id) => {
    dispatch(chat(id))
    setSelected(id)
    setChatName(userChats.find(item => item.id === id).title)
  }

    return (
      <div className={classes.pageIndex}>
        <div className={classes.chatsList}>
          <Header />
          {userChats.map(chat => <ChatItemList key={chat.id}
                                               chat={chat}
                                               onClick={() => onChatClick(chat.id)}
                                               isSelected={selected === chat.id}
                                 />)
          }
        </div>
        <div className={classes.chat}>
          <Header title={chatName} icon={true} />
          {!!selected && <ChatPage />}
        </div>
      </div>
    )
}
