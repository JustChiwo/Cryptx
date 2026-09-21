function MetricCard({ name, price, change, positive, bg }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex-1 min-w-[160px]">
      <div className="flex items-center justify-between mb-4">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: bg }}
        >
          {name[0]}
        </div>
        <span
          className={`text-xs font-medium ${positive ? "text-green-500" : "text-orange-500"}`}
        >
          {positive ? "▲" : "▼"} {change}
        </span>
      </div>
      <p className="text-xl font-bold text-gray-800">{price}</p>
      <p className="text-xs text-gray-400 mt-1">{name}</p>
    </div>
  );
}

export default MetricCard;
