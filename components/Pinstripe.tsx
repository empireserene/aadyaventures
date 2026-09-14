export function Pinstripe({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 pinstripe" />
      <div className="pointer-events-none absolute inset-0 light-sweep" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
