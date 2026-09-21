import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import TransactionTable from "../ui/TransactionTable";
import { metricData, marketData } from "../../data/chartStaticData";

function MainContent() {
  return (
    <div className="flex flex-col gap-6">
      {/* Top row: metric cards + BTC chart */}
      <div className="flex gap-6">
        <div className="grid grid-cols-2 gap-4 flex-1 max-w-md">
          {metricData.map((m) => (
            <MetricCard key={m.id} {...m} />
          ))}
        </div>
        <ChartVisual />
      </div>

      {/* Bottom row: Live Market + Transactions */}
      <div className="flex gap-6">
        <div className="bg-white rounded-2xl p-6 flex-1">
          <h3 className="font-semibold text-gray-800 mb-4">Live Market</h3>
          <ul className="flex flex-col gap-4">
            {marketData.map((coin) => (
              <li key={coin.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold"
                    style={{ color: coin.color }}
                  >
                    {coin.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {coin.name}
                    </p>
                    <p className="text-xs text-gray-400">{coin.pair}</p>
                  </div>
                </div>
                <div className="text-xs">
                  <p className="text-gray-400">Change</p>
                  <p
                    className={
                      coin.positive ? "text-green-500" : "text-orange-500"
                    }
                  >
                    {coin.change}
                  </p>
                </div>
                <div className="text-xs text-right">
                  <p className="text-gray-400">Price</p>
                  <p className="text-gray-800">{coin.price}</p>
                </div>
                <svg viewBox="0 0 100 30" className="w-16 h-6">
                  <path
                    d="M0 20 L20 10 L40 22 L60 6 L80 16 L100 8"
                    fill="none"
                    stroke={coin.color}
                    strokeWidth="2"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        <TransactionTable />
      </div>
    </div>
  );
}

export default MainContent;
