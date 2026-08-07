import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", placements: 42 },
  { month: "Feb", placements: 58 },
  { month: "Mar", placements: 81 },
  { month: "Apr", placements: 95 },
  { month: "May", placements: 120 },
  { month: "Jun", placements: 146 },
];

function PlacementChart() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Placement Trend
      </h2>

      <p className="mb-8 text-slate-500">
        Monthly placements
      </p>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="colorPlacement"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop offset="5%" stopColor="#000" stopOpacity={0.35} />

                <stop offset="95%" stopColor="#000" stopOpacity={0} />

              </linearGradient>

            </defs>

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="placements"
              stroke="#000"
              strokeWidth={3}
              fill="url(#colorPlacement)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default PlacementChart;