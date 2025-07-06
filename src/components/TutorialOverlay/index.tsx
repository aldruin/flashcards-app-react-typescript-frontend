import './TutorialOverlay.css'

interface TutorialOverlayProps {
  passoAtual: number;
  onAvancar: () => void;
  onPular: () => void;
}

const mensagens = [
  '📌 Crie seu primeiro flashcard com uma pergunta e resposta.',
  '🧠 Clique em um card para revelar a resposta.',
  '✏️ Edite ou exclua cards usando os ícones no canto inferior.',
  '🎉 Pronto! Agora é só revisar e aprender!'
];

const TutorialOverlay = ({ passoAtual, onAvancar, onPular }: TutorialOverlayProps) => {
  if (passoAtual >= mensagens.length) return null;

  return (
    <div className="tutorial-overlay">
      <div className="tutorial-caixa">
        <p>{mensagens[passoAtual]}</p>
        <div className="tutorial-botoes">
          <button onClick={onAvancar}>
            {passoAtual === mensagens.length - 1 ? 'Finalizar' : 'Próximo'}
          </button>
          <button className="btn-pular" onClick={onPular}>Pular</button>
        </div>
      </div>
    </div>
  );
};

export default TutorialOverlay;