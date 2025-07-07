import { DragDropContext, Draggable, Droppable, type DropResult } from "@hello-pangea/dnd";
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
  onReordenar?: (novosCards: FlashcardData[]) => void;
}

const FlashcardList = ({ cards, onExcluir, onEditar, onReordenar }: FlashcardListProps) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reordered = Array.from(cards);
    const [removido] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removido);

    onReordenar?.(reordered);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="flashcards">
        {(provided) => (
          <div
            className="flashcard-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {(providedDraggable) => (
                  <div
                    ref={providedDraggable.innerRef}
                    {...providedDraggable.draggableProps}
                    {...providedDraggable.dragHandleProps}
                  >
                    <Flashcard
                      pergunta={card.pergunta}
                      resposta={card.resposta}
                      onExcluir={() => onExcluir?.(card.id)}
                      onEditar={() => onEditar?.(card)}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default FlashcardList;

