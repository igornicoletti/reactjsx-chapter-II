import logoImage from '../../assets/logo.svg';
import { HeaderCtn, HeaderCtnCtt } from './styles';

type HeaderProps = {
  onOpenNewTransactionsModal: () => void;
};

export function Header({ onOpenNewTransactionsModal }: HeaderProps) {
  return (
    <>
      <HeaderCtn>
        <HeaderCtnCtt>
          <img src={logoImage} alt="dt money" />
          <button type="button" onClick={onOpenNewTransactionsModal}>Nova transação</button>
        </HeaderCtnCtt>
      </HeaderCtn>
    </>
  );
};