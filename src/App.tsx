import { useState } from 'react'
import Flashcard from './components/Flashcard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flashcard pergunta="Pergunta teste" resposta="Resposta teste" />
  )
}

export default App
