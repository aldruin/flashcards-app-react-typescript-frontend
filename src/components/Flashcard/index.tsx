import { useState } from "react";
import './Flashcard.css';

interface FlashcardProps {
  pergunta: string;
  resposta: string;
  onExcluir?: () => void;
  onEditar?: () => void;
}

const Flashcard = ({ pergunta, resposta, onExcluir, onEditar }: FlashcardProps) => {
  const [virado, setVirado] = useState(false);
  const [confirmandoExclusao, setConfirmandoExclusao] = useState(false);

  const handleClick = () => setVirado((prev) => !prev);

  const confirmarRemocao = (e: React.MouseEvent) => {
    e.stopPropagation();
    onExcluir?.();
    setConfirmandoExclusao(false);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      <div className={`flashcard-inner ${virado ? 'flipped' : ''}`}>
        <div className="flashcard-front">
          <div className="flashcard-texto">{pergunta}</div>
        </div>
        <div className="flashcard-back">
          <div className="flashcard-texto">{resposta}</div>
        </div>
      </div>
      <div className="flashcard-acoes">
        {confirmandoExclusao ? (
          <div className="confirmacao-inline" onClick={(e) => e.stopPropagation()}>
            <span>Excluir?</span>
            <button onClick={confirmarRemocao}>Sim</button>
            <button onClick={(e) => { e.stopPropagation(); setConfirmandoExclusao(false); }}>
              Cancelar
            </button>
          </div>
        ) : (
          <>
            <span onClick={(e) => { e.stopPropagation(); onEditar?.(); }} title="Editar">✏️</span>
            <span onClick={(e) => { e.stopPropagation(); setConfirmandoExclusao(true); }} title="Excluir">🗑️</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Flashcard;