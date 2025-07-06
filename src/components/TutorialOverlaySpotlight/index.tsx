import { useEffect, useState } from 'react';
import './TutorialOverlaySpotlight.css';

interface TutorialOverlaySpotlightProps {
  passoAtual: number;
  onAvancar: () => void;
  onPular: () => void;
}

const passos = [
  { selector: '.form-flashcard', texto: '📌 Comece criando um flashcard aqui.' },
  { selector: '.flashcard', texto: '🧠 Clique em um card para ver a resposta.' },
  { selector: '.flashcard-acoes', texto: '✏️ Use os ícones para editar ou excluir.' },
];

const TutorialOverlaySpotlight = ({ passoAtual, onAvancar, onPular }: TutorialOverlaySpotlightProps) => {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const selector = passos[passoAtual]?.selector;
    if (!selector) return;

    const alvo = document.querySelector(selector);
    if (alvo) {
      const bounds = alvo.getBoundingClientRect();
      setRect(bounds);
    }
  }, [passoAtual]);

  if (passoAtual >= passos.length || !rect) return null;

  const texto = passos[passoAtual].texto;

  return (
    <div className="tutorial-spotlight-overlay">
      <div
        className="highlight-foco"
        style={{
          top: rect.top + window.scrollY,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        }}
      />

      <div
        className="tutorial-caixa-explicacao"
        style={{
          top: rect.bottom + window.scrollY + 12,
          left: rect.left,
        }}
      >
        <p>{texto}</p>
        <button onClick={onAvancar}>
          {passoAtual === passos.length - 1 ? 'Finalizar' : 'Próximo'}
        </button>
        <button onClick={onPular}>Pular</button>
      </div>
    </div>
  );
};

export default TutorialOverlaySpotlight;