import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (message.length < 12) {
    return NextResponse.json(
      { error: "Please add a short description of the opportunity." },
      { status: 400 },
    );
  }

  console.info("[Aadya Ventures enquiry]", {
    name,
    email,
    organisation: body.organisation,
    phone: body.phone,
    sector: body.sector,
    message,
  });

  return NextResponse.json({ ok: true });
}
