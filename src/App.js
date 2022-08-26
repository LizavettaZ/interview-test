import React, { useEffect } from 'react'
import { PageIndex } from "./pages/index/PageIndex"
import { useDispatch } from 'react-redux'
import { chats } from "./store/actions/chats"
import StubPage from './pages/stubPage/StubPage'


function App() {
  const dispatch = useDispatch()

  useEffect(() => dispatch(chats()), [])

  return (
    <div>
      {document.documentElement.scrollWidth > 700
        ? <PageIndex />
        : <StubPage />
      }
    </div>
  )
}

export default App
