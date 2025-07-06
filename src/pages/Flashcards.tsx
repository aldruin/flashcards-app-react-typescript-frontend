import { useState } from 'react';
import CriarFlashcard from '../components/CriarFlashcard';
import ModalEdicaoFlashcard from '../components/ModalEdicaoFlashcard';
import FlashcardList from '../components/FlashcardList';

const Flashcards = () => {
  const [cards, setCards] = useState([
    {
      id: '1',
      pergunta: 'O que são generics em Java?',
      resposta: 'Permitem criar classes e métodos que funcionam com diferentes tipos, mantendo a segurança de tipo.'
    },
    {
      id: '2',
      pergunta: 'Para que serve o interface no TypeScript?',
      resposta: 'Para definir a forma de um objeto, garantindo que ele tenha as propriedades e tipos esperados.'
    },
    {
      id: '3',
      pergunta: 'Qual a diferença entre interface e type no TypeScript?',
      resposta: 'Ambos definem tipos, mas interface pode ser extendida múltiplas vezes; type é mais flexível para união e composição.'
    },
    {
      id: '4',
      pergunta: 'O que é o JSX em React?',
      resposta: 'É uma extensão de sintaxe que permite escrever HTML dentro do JavaScript.'
    },
    {
      id: '5',
      pergunta: 'O que são props em React?',
      resposta: 'São dados passados de um componente pai para um componente filho, semelhantes a parâmetros de função.'
    },
    {
      id: '6',
      pergunta: 'Como funciona o useState no React?',
      resposta: 'É um hook que permite criar e atualizar um estado dentro de componentes funcionais.'
    },
    {
      id: '7',
      pergunta: 'Qual a diferença entre React e React Native?',
      resposta: 'React é usado para web, React Native para criar apps nativos para iOS e Android usando JavaScript.'
    },
    {
      id: '8',
      pergunta: 'Como estilizar componentes no React Native?',
      resposta: 'Com o objeto StyleSheet ou usando bibliotecas como Styled Components ou Tailwind React Native.'
    },
    {
      id: '9',
      pergunta: 'O que é o ciclo de vida de um componente React?',
      resposta: 'É o conjunto de fases (montagem, atualização, desmontagem) em que o componente passa; controlado via hooks como useEffect.'
    }
  ]);

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


  return (
    <div>
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
    </div>
  );
};

export default Flashcards;