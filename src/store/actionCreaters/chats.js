import { GET_CHAT, GET_CHATS, GET_ERROR, SET_LOADING } from '../actions/actionTypes'


export const getError = (err) => {
  return {
    type: GET_ERROR,
    error: err
  }
}

export const setLoading = (payload) => {
  return{
    type: SET_LOADING,
    loading: payload
  }
}

export const getChats = (payload) => {
  return{
    type: GET_CHATS,
    chats: payload
  }
}

export const getChat = (payload) => {
  return{
    type: GET_CHAT,
    chat: payload
  }
}

