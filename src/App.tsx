import { useEffect, useState } from 'react';
import Flashcards from './pages/Flashcards';
import './App.css';

function App() {
  const [modoEscuro, setModoEscuro] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', modoEscuro);
  }, [modoEscuro]);

  return (
    <div>
      <button onClick={() => setModoEscuro(prev => !prev)} style={{ margin: '16px' }}>
        {modoEscuro ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </button>
      <Flashcards />
    </div>
  );
}

export default App;