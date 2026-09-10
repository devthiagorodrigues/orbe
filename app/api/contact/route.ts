import { NextResponse } from "next/server";
import { escapeHtml, validateContactPayload } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Dados inválidos." },
      { status: 400 }
    );
  }

  const result = validateContactPayload(body);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors, message: result.errors.form },
      { status: 400 }
    );
  }

  const mode = process.env.CONTACT_MODE ?? "log";

  if (mode === "disabled") {
    return NextResponse.json(
      {
        ok: false,
        message: "O formulário desta demonstração ainda não está ativo."
      },
      { status: 503 }
    );
  }

  if (mode === "log") {
    console.info("[orbe-contact]", {
      name: result.data.name,
      email: result.data.email,
      projectType: result.data.projectType,
      city: result.data.city,
      messageLength: result.data.message.length
    });

    return NextResponse.json({ ok: true });
  }

  if (mode !== "resend") {
    return NextResponse.json(
      { ok: false, message: "Configuração de contato inválida." },
      { status: 500 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { ok: false, message: "O canal de contato ainda não foi configurado." },
      { status: 503 }
    );
  }

  const { name, email, projectType, city, message } = result.data;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Orbe] Novo contato: ${projectType}`,
      html: `
        <h1>Novo contato: Orbe</h1>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Tipo:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Cidade:</strong> ${escapeHtml(city || "Não informado")}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `
    }),
    signal: AbortSignal.timeout(8000)
  });

  if (!response.ok) {
    console.error("[orbe-contact] resend_error", response.status);
    return NextResponse.json(
      { ok: false, message: "Não foi possível enviar agora." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
