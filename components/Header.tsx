"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

const lightPaths = ["/insights", "/privacy", "/terms", "/disclaimer"];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isLight =
    lightPaths.some((path) => pathname.startsWith(path)) &&
    pathname !== "/insights";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = isLight && !open;
  const tone = light ? "dark" : "light";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        open
          ? "bg-navy-950"
          : scrolled
            ? light
              ? "bg-white/90 backdrop-blur-md"
              : "bg-navy-950/80 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Logo tone={tone} />

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] tracking-[0.02em] transition-opacity hover:opacity-100 ${
                  light ? "text-ink" : "text-white"
                } ${active ? "opacity-100" : "opacity-70"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end lg:hidden">
          <button
            type="button"
            className={`lg:hidden ${light ? "text-ink" : "text-white"}`}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition ${open ? "translate-y-[9px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-full bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-full bg-current transition ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy-950 px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
