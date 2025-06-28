import { FC } from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox: FC<TotlaBalanceBoxProps> = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}) => {
  return (
    <section className="total-balance">
      {/* doughnut chart */}
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-labek">Total Current Balance</p>
          <div className="total-balance-amount flex-center">
            <AnimatedCounter value={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
