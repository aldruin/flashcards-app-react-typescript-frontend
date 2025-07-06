import FlashcardList from './components/FlashcardList'
import './App.css'

const cardsExemplo = [
  { id: '1', pergunta: 'O que é React?', resposta: 'Uma biblioteca JavaScript para construir interfaces de usuário.' },
  { id: '2', pergunta: 'O que é um componente?', resposta: 'Um bloco reutilizável de código que define uma parte da interface.' },
  { id: '3', pergunta: 'O que é estado (state)?', resposta: 'Uma forma de armazenar dados que podem mudar ao longo do tempo.' },
]

function App() {
  return (
    <div>
      <h1>Meus Flashcards</h1>
      <FlashcardList cards={cardsExemplo} />
    </div>
  )
}

export default App
