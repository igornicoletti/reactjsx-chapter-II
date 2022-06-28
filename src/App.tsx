import { useState } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionsModal } from "./components/TransactionsModal";
import { TransactionsContextProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true);
  };

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsModalOpen(false);
  };

  return (
    <TransactionsContextProvider>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />
      <TransactionsModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal} />
      <GlobalStyle />
    </TransactionsContextProvider>
  );
};