export function Reserved({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`pointer-events-none hidden text-right text-[10px] leading-4 tracking-[0.04em] sm:block ${
        tone === "light" ? "text-white/45" : "text-ink/40"
      }`}
    >
      Aadya Ventures Limited
      <br />
      All Rights Reserved
    </p>
  );
}
