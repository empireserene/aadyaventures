import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-14 lg:py-20">
        <div>
          <Logo tone="light" withWordmark />
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-white/55">
            Dubai-based investment company allocating capital into information
            technology, real estate, and selected adjacent
            sectors.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
            Office
          </p>
          <address className="mt-5 not-italic text-[15px] leading-7 text-white/75">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
            <br />
            {site.address.city}, {site.address.country}
          </address>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-[15px] text-white/75">
            <li>
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`tel:${site.phoneHref}`}>
                {site.phone}
              </a>
            </li>
            <li className="text-white/50">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white/70">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
