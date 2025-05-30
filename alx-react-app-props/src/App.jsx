import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'



function App() {
        const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
      
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserContext.Provider value= { userData }>
        <ProfilePage />
      </UserContext.Provider>
    </>
  )
}

export default App
