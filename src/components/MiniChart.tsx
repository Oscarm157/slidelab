"use client";

import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

interface MiniChartProps {
  type: "sparkline" | "donut" | "bar";
  data: number[];
  labels?: string[];
  color?: string;
  height?: number;
}

export function MiniChart({
  type, data, labels, color = "var(--t-primary)", height = 80,
}: MiniChartProps) {
  const chartData = data.map((value, i) => ({
    name: labels?.[i] ?? `${i}`,
    value,
  }));

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        {type === "sparkline" ? (
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="miniGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fill="url(#miniGrad)"
            />
          </AreaChart>
        ) : type === "bar" ? (
          <BarChart data={chartData}>
            <Bar dataKey="value" fill={color} radius={[3, 3, 0, 0]} />
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              innerRadius="60%"
              outerRadius="100%"
              paddingAngle={2}
              strokeWidth={0}
            >
              {chartData.map((_, i) => (
                <Cell key={i} fill={i === 0 ? color : `color-mix(in srgb, ${color} ${30 + i * 15}%, #e5e5e5)`} />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
