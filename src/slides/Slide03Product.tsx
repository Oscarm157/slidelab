import { Slide } from "@/components/Slide";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";

// ─────────────────────────────────────────────
// Métricas — Datos que hablan por sí mismos
// Muestra counters animados y gráfica Recharts
// ─────────────────────────────────────────────

import { ChartWrapper } from "@/components/ChartWrapper";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { trimestre: "Q1", actual: 120, anterior: 95 },
  { trimestre: "Q2", actual: 145, anterior: 108 },
  { trimestre: "Q3", actual: 162, anterior: 115 },
  { trimestre: "Q4", actual: 198, anterior: 130 },
];

export function Slide03Product() {
  return (
    <Slide variant="dark">
      <div className="slide-enter">
        <SectionHeader
          number="02"
          title="Resultados del último año"
          subtitle="Crecimiento trimestral comparado contra el periodo anterior."
        />

        {/* Gráfica */}
        <div className="mb-8">
          <ChartWrapper height={280}>
            <BarChart data={data} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#222" />
              <XAxis dataKey="trimestre" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#141414",
                  border: "1px solid #333",
                  borderRadius: 8,
                  fontSize: 13,
                }}
              />
              <Bar dataKey="anterior" fill="#444" radius={[4, 4, 0, 0]} name="Anterior" />
              <Bar dataKey="actual" fill="var(--color-primary)" radius={[4, 4, 0, 0]} name="Actual" />
            </BarChart>
          </ChartWrapper>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 stagger-in">
          <StatCard value={198} suffix=" ud." label="Unidades Q4" />
          <StatCard value={52} suffix="%" label="Crecimiento anual" />
          <StatCard value={4.2} suffix="M" prefix="$" label="Facturación" decimals={1} />
          <StatCard value={96} suffix="%" label="Retención clientes" />
        </div>
      </div>
    </Slide>
  );
}
