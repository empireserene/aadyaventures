import Link from "next/link";

export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16.2 3.2 29 28.4h-5.4l-2.4-5.3H10.7l-2.4 5.3H3L16.2 3.2Zm-3.2 15.2h6.2L16.2 11l-3.2 7.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({
  tone = "light",
  withWordmark = false,
}: {
  tone?: "light" | "dark";
  withWordmark?: boolean;
}) {
  const color = tone === "light" ? "text-white" : "text-ink";

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${color}`}
      aria-label="Aadya Ventures Limited home"
    >
      <LogoMark className="h-7 w-7" />
      {withWordmark ? (
        <span className="text-[13px] font-medium tracking-[0.04em]">
          Aadya Ventures
        </span>
      ) : null}
    </Link>
  );
}
