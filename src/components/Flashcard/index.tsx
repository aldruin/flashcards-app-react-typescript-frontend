import { useState } from "react";
import './Flashcard.css';

interface FlashcardProps {
  pergunta: string;
  resposta: string;
}

const Flashcard = ({ pergunta, resposta }: FlashcardProps) => {
  const [virado, setVirado] = useState(false);
  const handleClick = () => setVirado((prev) => !prev);

  return (
    <div className="flashcard" onClick={handleClick}>
      <div className={`flashcard-inner ${virado ? 'flipped' : ''}`}>
        <div className="flashcard-front">
          <p>{pergunta}</p>
        </div>
        <div className="flashcard-back">
          <p>{resposta}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;