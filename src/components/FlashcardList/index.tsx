import Flashcard from "../Flashcard";
import './FlashcardList.css';

interface FlashcardData {
  id: string;
  pergunta: string;
  resposta: string;
}

interface FlashcardListProps {
  cards: FlashcardData[];
  onExcluir?: (id: string) => void;
  onEditar?: (card: FlashcardData) => void;
}

const FlashcardList = ({ cards, onExcluir, onEditar }: FlashcardListProps) => {
  return (
    <div className="flashcard-list">
      {cards.map((card) => (
        <Flashcard
          key={card.id}
          pergunta={card.pergunta}
          resposta={card.resposta}
          onExcluir={() => onExcluir?.(card.id)}
          onEditar={() => onEditar?.(card)}
        />
      ))}
    </div>
  );
};

export default FlashcardList;

