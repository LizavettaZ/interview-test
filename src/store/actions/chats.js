import axios from 'axios'
import { setLoading, getChats, getError, getChat } from '../actionCreaters/chats'


export const chats = () => {
  return async dispatch => {
    dispatch(setLoading(true))
    try {
      const response = await axios.get(`https://api.clout.one/test/chat.get`)
      dispatch(getChats(response.data.response))
      dispatch(setLoading(false))
    }
    catch (e) {
      dispatch(getError(e))
      dispatch(setLoading(false))
    }
  }
}

export const chat = (id) => {
  return async dispatch => {
    dispatch(setLoading(true))
    try {
      const response = await axios.get(`https://api.clout.one/test/message.get?chat_id=${id}&offset=0&limit=20`)
      dispatch(getChat(response.data.response))
      dispatch(setLoading(false))
    }
    catch (e) {
      dispatch(getError(e))
      dispatch(setLoading(false))
    }
  }
}

