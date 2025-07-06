import Flashcard from "../Flashcard";
import './FlashcardList.css';

interface FlashcardData {
  id: string;
  pergunta: string;
  resposta: string;
}

interface FlashcardListProps {
  cards: FlashcardData[];
}

const FlashcardList = ({ cards }: FlashcardListProps) => {
  return (
    <div className="flashcard-list">
      {cards.map((card) => (
        <Flashcard
          key={card.id}
          pergunta={card.pergunta}
          resposta={card.resposta}
        />
      ))}
    </div>
  );
};

export default FlashcardList;

