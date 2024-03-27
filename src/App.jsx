import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Avatar from './components/Simpson'
import './App.css'

function App() {

  return (
    <>
      <Avatar firstName="Bart" lastName="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"/>
      <Avatar firstName="Homer" lastName="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png"/>
      <Avatar firstName="Marge" lastName="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png"/>
      <Avatar firstName="Lisa" lastName="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png"/>
      <Avatar firstName="Maggie" lastName="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png"/>
    </>
  )
}

export default App
