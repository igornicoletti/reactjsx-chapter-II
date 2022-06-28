import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { DashboardCtn, DashboardCtnCtt } from "./styles";

export function Dashboard() {
  return (
    <>
      <DashboardCtn>
        <DashboardCtnCtt>

          <Summary />
          <TransactionsTable />

        </DashboardCtnCtt>
      </DashboardCtn>
    </>
  );
};