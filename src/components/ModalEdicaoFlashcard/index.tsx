import CriarFlashcard from "../CriarFlashcard"
import './ModalEdicaoFlashcard.css'

interface ModalEdicaoFlashcardProps {
  card: { pergunta: string; resposta: string; };
  onSalvar: (dados: { pergunta: string; resposta: string }) => void;
  onFechar: () => void;
}

const ModalEdicaoFlashcard = ({ card, onSalvar, onFechar }: ModalEdicaoFlashcardProps) => {
  return (
    <div className="modal-edicao-overlay">
      <div className="modal-edicao-conteudo">
        <CriarFlashcard
          onCriar={onSalvar}
          cardInicial={card}
          modoEdicao
        />
        <button className="btn-fechar-edicao" onClick={onFechar}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalEdicaoFlashcard;