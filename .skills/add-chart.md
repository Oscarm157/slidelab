# Skill: Agregar una gráfica con Recharts

## Pasos

1. Importa los componentes necesarios de Recharts y el ChartWrapper:
```tsx
import { ChartWrapper } from "@/components/ChartWrapper";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
```

2. Define tus datos como array de objetos:
```tsx
const data = [
  { mes: "Ene", ventas: 40 },
  { mes: "Feb", ventas: 65 },
  { mes: "Mar", ventas: 80 },
];
```

3. Usa ChartWrapper para que la gráfica sea responsive:
```tsx
<ChartWrapper height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#222" />
    <XAxis dataKey="mes" stroke="#666" fontSize={12} />
    <YAxis stroke="#666" fontSize={12} />
    <Tooltip />
    <Bar dataKey="ventas" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
  </BarChart>
</ChartWrapper>
```

## Otros tipos de gráfica
- `LineChart` + `Line` → Líneas
- `AreaChart` + `Area` → Áreas
- `PieChart` + `Pie` → Pastel
- `RadarChart` + `Radar` → Radar

Todos se usan igual: importa de `recharts`, envuelve en `<ChartWrapper>`.

## Estilo dark mode
```tsx
<Tooltip contentStyle={{ backgroundColor: "#141414", border: "1px solid #333", borderRadius: 8 }} />
```
