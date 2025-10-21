import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import LoginPage from './pages/LoginPage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<ChatPage/>} />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
  
    </div>
  )
}

export default App
