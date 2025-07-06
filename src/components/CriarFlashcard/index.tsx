import { useState } from "react";
import './CriarFlashcard.css';

interface CriarFlashcardProps {
  onCriar: (novoCard: { pergunta: string; resposta: string}) => void;
}

const CriarFlashcard = ({ onCriar }: CriarFlashcardProps) => {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pergunta.trim() || !resposta.trim()) {
      alert('Por favor, preencha ambos os campos!');
      return;
    }
    
    onCriar({ pergunta, resposta });

    setPergunta('');
    setResposta('');
  };

  return(
    <form className="form-flashcard" onSubmit={handleSubmit}>
      <h2>Criar novo Card</h2>

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

      <button type="submit">Salvar</button>
    </form>
  );
};

export default CriarFlashcard;