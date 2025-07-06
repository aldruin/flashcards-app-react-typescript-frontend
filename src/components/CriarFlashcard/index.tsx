import { useEffect, useState } from "react";
import './CriarFlashcard.css';

interface CriarFlashcardProps {
  onCriar: (novoCard: { pergunta: string; resposta: string }) => void;
  cardInicial?: { pergunta: string; resposta: string };
  modoEdicao?: boolean;
}

const CriarFlashcard = ({ onCriar, cardInicial, modoEdicao = false }: CriarFlashcardProps) => {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

  useEffect(() => {
    if (cardInicial) {
      setPergunta(cardInicial.pergunta);
      setResposta(cardInicial.resposta);
    }
  }, [cardInicial]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pergunta.trim() || !resposta.trim()) {
      alert('Por favor, preencha ambos os campos!');
      return;
    }

    onCriar({ pergunta, resposta });

    if (!modoEdicao) {
      setPergunta('');
      setResposta('');
    }

  };

  return (
    <form className="form-flashcard" onSubmit={handleSubmit}>
      <h2>{modoEdicao ? 'Editar Flashcard' : 'Criar novo Flashcard'}</h2>

      <input
        type="text"
        placeholder="Pergunta"
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
      />

      <input
        type="text"
        placeholder="Resposta"
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
      />

      <button type="submit">{modoEdicao ? 'Salvar alterações' : 'Salvar'}</button>
    </form>
  );
};


export default CriarFlashcard;