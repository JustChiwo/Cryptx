import { btcChartPoints, chartMonths } from "../../data/chartStaticData";

function buildPath(points) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
}

function ChartVisual() {
  const highlighted = btcChartPoints[4]; // the "$25,240" bubble point

  return (
    <div className="bg-white rounded-2xl p-6 flex-1">
      <h3 className="font-semibold text-gray-800 mb-4">BTC Prices</h3>

      <div className="relative">
        <svg viewBox="0 0 700 220" className="w-full h-48">
          {/* grid lines */}
          {[0, 44, 88, 132, 176].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="700"
              y2={y}
              stroke="#F1F1F1"
              strokeWidth="1"
            />
          ))}

          {/* highlighted column band */}
          <rect
            x={highlighted.x - 15}
            y="0"
            width="30"
            height="220"
            fill="#EDEBFF"
          />

          {/* price line */}
          <path
            d={buildPath(btcChartPoints)}
            fill="none"
            stroke="#6154F0"
            strokeWidth="2.5"
          />

          {/* highlighted dot */}
          <circle cx={highlighted.x} cy={highlighted.y} r="5" fill="#6154F0" />
        </svg>

        {/* tooltip bubble */}
        <div
          className="absolute bg-[#6154F0] text-white text-xs px-2 py-1 rounded-md -translate-x-1/2"
          style={{
            left: `${(highlighted.x / 700) * 100}%`,
            top: `${(highlighted.y / 220) * 100}%`,
            transform: "translate(-50%, -140%)",
          }}
        >
          $25,240
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-2">
        {chartMonths.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export default ChartVisual;
