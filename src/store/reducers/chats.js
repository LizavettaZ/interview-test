import { GET_CHAT, GET_CHATS, GET_ERROR, SET_LOADING } from '../actions/actionTypes'


const initialState = {
  chats: [],
  chat: [],
  error: null,
  loading: false
}

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.loading }
    case GET_ERROR:
      return { ...state, error: action.error }
    case GET_CHATS:
      return { ...state, chats: action.chats }
    case GET_CHAT:
      return { ...state, chat: action.chat }
    default:
      return state
  }
}

