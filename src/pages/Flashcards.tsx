import { useEffect, useState } from 'react';
import TutorialOverlaySpotlight from '../components/TutorialOverlaySpotlight';
import CriarFlashcard from '../components/CriarFlashcard';
import ModalEdicaoFlashcard from '../components/ModalEdicaoFlashcard';
import FlashcardList from '../components/FlashcardList';
import './Flashcards.css';

type Flashcard = {
  id: string;
  pergunta: string;
  resposta: string;
};


const Flashcards = () => {
  const [cards, setCards] = useState<Flashcard[]>(() => {
    try {
      const salvos = localStorage.getItem('cards-salvos');
      return salvos ? JSON.parse(salvos) : [
        {
          id: '1',
          pergunta: 'Por que o React precisa de uma "key" quando renderizamos listas?',
          resposta: 'Para o React identificar quais itens mudaram, foram adicionados ou removidos. Isso evita renderizações desnecessárias e melhora a performance.'
        },
        {
          id: '2',
          pergunta: 'O que acontece se você atualizar o state diretamente sem usar setState?',
          resposta: 'O componente não será re-renderizado. Sempre use setState (ou setNomeDoEstado com useState) para garantir que o React perceba as mudanças.'
        },
        {
          id: '3',
          pergunta: 'Como o React mantém sua UI sincronizada com os dados?',
          resposta: 'Usando um ciclo de renderização reativo: quando o estado ou props mudam, o React re-renderiza automaticamente os componentes afetados.'
        }
      ];
    } catch (error) {
      return [];
    }
  });

  const [editandoCard, setEditandoCard] = useState<null | {
    id: string;
    pergunta: string;
    resposta: string;
  }>(null);

  const criarCard = (novo: { pergunta: string; resposta: string }) => {
    const novoCard = { id: crypto.randomUUID(), ...novo };
    setCards((prev) => [...prev, novoCard]);
  };

  const excluirCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const salvarEdicao = (dados: { pergunta: string; resposta: string }) => {
    if (editandoCard) {
      setCards((prev) =>
        prev.map((card) =>
          card.id === editandoCard.id ? { ...card, ...dados } : card
        )
      );
      setEditandoCard(null);
    }
  };

  const [tutorialPasso, setTutorialPasso] = useState(0);

  const [tutorialVisivel, setTutorialVisivel] = useState(false);

  useEffect(() => {
    const jaViuTutorial = localStorage.getItem('tutorial-visto');
    if (!jaViuTutorial) {
      setTutorialVisivel(true); // exibe na primeira vez
      localStorage.setItem('tutorial-visto', 'true'); // marca como visto
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cards-salvos', JSON.stringify(cards));
  }, [cards]);


  return (
    <div className="flashcards-container">
      <h1>Flashcards de Estudo</h1>

      <CriarFlashcard onCriar={criarCard} />

      <FlashcardList
        cards={cards}
        onExcluir={excluirCard}
        onEditar={(card) => setEditandoCard(card)}
      />

      {editandoCard && (
        <ModalEdicaoFlashcard
          card={editandoCard}
          onSalvar={salvarEdicao}
          onFechar={() => setEditandoCard(null)}
        />
      )}

      {tutorialVisivel && (
        <TutorialOverlaySpotlight
          passoAtual={tutorialPasso}
          onAvancar={() => {
            const proximo = tutorialPasso + 1;
            if (proximo >= 3) setTutorialVisivel(false);
            setTutorialPasso(proximo);
          }}
          onPular={() => setTutorialVisivel(false)}
        />
      )}



    </div>
  );
};

export default Flashcards;