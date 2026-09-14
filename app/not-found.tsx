import Link from "next/link";
import { Pinstripe } from "@/components/Pinstripe";

export default function NotFound() {
  return (
    <Pinstripe className="flex min-h-screen items-center bg-navy-900">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 lg:px-14">
        <p className="text-[12px] tracking-[0.18em] text-white/40">404</p>
        <h1 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.6rem)] font-medium tracking-[-0.04em]">
          This page is not in the book.
        </h1>
        <p className="mt-4 max-w-md text-white/50">
          The address may have changed. Return home or write to the investment
          office.
        </p>
        <div className="mt-8 flex gap-6 text-[14px]">
          <Link href="/" className="border border-white/20 px-6 py-3 hover:bg-white hover:text-navy-950">
            Home
          </Link>
          <Link href="/contact" className="py-3 text-white/70 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </Pinstripe>
  );
}
