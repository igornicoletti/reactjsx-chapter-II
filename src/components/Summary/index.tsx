import { useTransactions } from '../../hooks/useTransactions';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { SummaryBox, SummaryBoxAbs, SummaryBoxAbsItems, SummaryBoxAbsItemsCard } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const sumary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  return (
    <>
      <SummaryBox>
        <SummaryBoxAbs>
          <SummaryBoxAbsItems>
            <SummaryBoxAbsItemsCard>
              <div>
                <p>Entradas</p>
                <img src={incomeImage} alt="" />
              </div>
              <p>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(sumary.deposits)}
              </p>
            </SummaryBoxAbsItemsCard>
            <SummaryBoxAbsItemsCard>
              <div>
                <p>Saídas</p>
                <img src={outcomeImage} alt="" />
              </div>
              <p>
                - {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(sumary.withdraws)}
              </p>
            </SummaryBoxAbsItemsCard>
            <SummaryBoxAbsItemsCard>
              <div>
                <p>Total</p>
                <img src={totalImage} alt="" />
              </div>
              <p>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(sumary.total)}
              </p>
            </SummaryBoxAbsItemsCard>
          </SummaryBoxAbsItems>
        </SummaryBoxAbs>
      </SummaryBox>
    </>
  );
};