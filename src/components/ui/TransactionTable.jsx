import transactions from "../../data/transactionData";

function TransactionTable() {
  return (
    <div className="bg-white rounded-2xl p-6 flex-1">
      <h3 className="font-semibold text-gray-800 mb-4">Transactions</h3>
      <ul className="flex flex-col gap-4">
        {transactions.map((tx) => (
          <li key={tx.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                  tx.type === "Received" ? "bg-green-500" : "bg-orange-400"
                }`}
              >
                {tx.coin[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{tx.coin}</p>
                <p className="text-xs text-gray-400">{tx.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">{tx.amount}</p>
              <p className="text-xs text-gray-400">{tx.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionTable;
