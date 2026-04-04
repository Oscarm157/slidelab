export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ overflow: "hidden", height: "100dvh" }}>{children}</div>;
}
