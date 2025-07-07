import { useEffect, useState } from 'react';
import Flashcards from './pages/Flashcards';
import './App.css';

function App() {
  const [modoEscuro, setModoEscuro] = useState(() => {
    return localStorage.getItem('modo-escuro') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', modoEscuro);
  }, [modoEscuro]);

  return (
    <div>
      <button
        onClick={() => {
          setModoEscuro(prev => {
            const novo = !prev;
            localStorage.setItem('modo-escuro', String(novo));
            return novo;
          });
        }}
        style={{ margin: '16px' }}
      >
        {modoEscuro ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </button>

      <Flashcards />
    </div>
  );
}

export default App;