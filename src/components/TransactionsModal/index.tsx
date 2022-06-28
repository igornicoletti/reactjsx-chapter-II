import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import closeImage from '../../assets/close.svg';
import { ModalForm, ModalFormBtn } from './styles'

Modal.setAppElement('#root');

const customModal = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    width: '100%',
    margin: 'auto',
    padding: '36px',
    maxWidth: '576px',
    height: 'fit-content'
  },
};

type TransactionsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function TransactionsModal({ isOpen, onRequestClose }: TransactionsModalProps) {
  const { createNewTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTansactions(event: FormEvent) {
    event.preventDefault();
    await createNewTransaction({ title, amount, category, type });
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customModal}
      onRequestClose={onRequestClose}
    >
      <ModalForm>
        <button onClick={onRequestClose}>
          <img src={closeImage} alt="" />
        </button>
        <h2>Cadastrar transação</h2>
        <form onSubmit={handleCreateNewTansactions}>
          <input
            type="text"
            value={title}
            placeholder="Título"
            onChange={event => setTitle(event.target.value)} />
          <input
            type="number"
            value={amount}
            placeholder="Valor"
            onChange={event => setAmount(Number(event.target.value))} />
          <div>
            <ModalFormBtn
              type="button"
              isActiveColor="green"
              isActive={type === 'deposit'}
              onClick={() => setType('deposit')}>
              <img src={incomeImage} alt="" />
              <span>Entrada</span>
            </ModalFormBtn>
            <ModalFormBtn
              type="button"
              isActiveColor="red"
              isActive={type === 'whitdraw'}
              onClick={() => setType('whitdraw')}>
              <img src={outcomeImage} alt="" />
              <span>Saída</span>
            </ModalFormBtn>
          </div>
          <input
            type="text"
            value={category}
            placeholder="Categoria"
            onChange={event => setCategory(event.target.value)} />
          <button type="submit">Cadastrar</button>
        </form>
      </ModalForm>
    </Modal>
  );
};