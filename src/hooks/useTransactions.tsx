import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

type TransactionsTableProps = {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionsModalProps = {
  title: string;
  amount: number;
  type: string;
  category: string;
};

type TransactionsContextDataProps = {
  transactions: TransactionsTableProps[];
  createNewTransaction: (transaction: TransactionsModalProps) => Promise<void>;
};

type TransactionsContextProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext<TransactionsContextDataProps>({} as TransactionsContextDataProps);

export function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsTableProps[]>([]);

  useEffect(() => {
    api('/transactions')
      .then(response => setTransactions(response.data.transactions))
      .catch(error => console.log('ops! ocorreu um erro' + error))
  }, []);

  async function createNewTransaction(transactionInput: TransactionsModalProps) {
    const response = await api.post('transactions', { ...transactionInput, createdAt: new Date() });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
};