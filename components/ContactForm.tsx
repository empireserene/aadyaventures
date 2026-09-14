"use client";

import { FormEvent, useState } from "react";
import { sectors } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "Unable to send your message.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const field =
    "w-full border-0 border-b border-white/20 bg-transparent py-3 text-[15px] text-white outline-none transition placeholder:text-white/35 focus:border-white";

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white/45">
            Full name
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white/45">
            Organisation
          </span>
          <input
            name="organisation"
            autoComplete="organization"
            className={field}
            placeholder="Company or family office"
          />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white/45">
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
          />
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white/45">
            Phone
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={field}
            placeholder="+971"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.16em] text-white/45">
          Sector of interest
        </span>
        <select
          required
          name="sector"
          className={`${field} appearance-none`}
          defaultValue=""
        >
          <option value="" disabled className="bg-navy-900 text-white">
            Select a sector
          </option>
          {sectors.map((sector) => (
            <option
              key={sector.slug}
              value={sector.name}
              className="bg-navy-900 text-white"
            >
              {sector.name}
            </option>
          ))}
          <option value="Other" className="bg-navy-900 text-white">
            Other / not sure
          </option>
        </select>
      </label>
      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.16em] text-white/45">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={4}
          className={`${field} resize-none`}
          placeholder="Tell us about the opportunity or partnership."
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-white/30 px-8 py-3 text-[13px] tracking-[0.08em] text-white transition hover:bg-white hover:text-navy-950 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {status === "sent" ? (
          <p className="text-sm text-white/70">
            Received. Our investment office will respond shortly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-300">{error}</p>
        ) : null}
      </div>
    </form>
  );
}
