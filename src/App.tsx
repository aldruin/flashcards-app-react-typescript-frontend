import CriarFlashcard from './components/CriarFlashcard'
import FlashcardList from './components/FlashcardList'
import { useState } from 'react'

function App() {
  const [cards, setCards] = useState([
    { id: '1', pergunta: 'O que é React?', resposta: 'Uma biblioteca JS para construir interfaces.' },
    { id: '2', pergunta: 'O que é um componente?', resposta: 'Uma parte reutilizável da interface.' },
    { id: '3', pergunta: 'O que é estado (state)?', resposta: 'Uma forma de armazenar dados que podem mudar ao longo do tempo.' }
  ])

  const criarCard = (novo: { pergunta: string; resposta: string }) => {
    const novoCard = { id: crypto.randomUUID(), ...novo }
    setCards((prev) => [...prev, novoCard]);
  };

  return (
    <div>
      <h1>Cards</h1>
      <CriarFlashcard onCriar={criarCard} />
      <FlashcardList cards={cards} />
    </div>
  )
}

export default App
