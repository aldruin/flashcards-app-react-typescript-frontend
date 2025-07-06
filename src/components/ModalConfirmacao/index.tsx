import './ModalConfirmacao.css'

interface ModalConfirmacaoProps {
  visivel: boolean;
  onConfirmar: () => void;
  onCancelar: () => void;
  mensagem?: string;
}

const ModalConfirmacao = ({
  visivel,
  onConfirmar,
  onCancelar,
  mensagem = 'Tem certeza?'
}: ModalConfirmacaoProps) => {
  if (!visivel) return null;

  return (
    <div className="overlay-modal">
      <div className="modal">
        <p>{mensagem}</p>
        <div className="modal-botoes">
          <button onClick={onConfirmar} className="btn-confirmar">Sim</button>
          <button onClick={onCancelar} className="btn-cancelar">Não</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacao;