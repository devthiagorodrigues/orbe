export type ContactPayload = {
  name: string;
  email: string;
  projectType: string;
  city?: string;
  message: string;
  company?: string;
};

const projectTypes = new Set([
  "Arquitetura residencial",
  "Interiores",
  "Arquitetura comercial",
  "Reforma",
  "Consultoria",
  "Outro"
]);

export function validateContactPayload(input: unknown):
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: Record<string, string> } {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: { form: "Dados inválidos." } };
  }

  const raw = input as Record<string, unknown>;
  const data: ContactPayload = {
    name: String(raw.name ?? "").trim(),
    email: String(raw.email ?? "").trim().toLowerCase(),
    projectType: String(raw.projectType ?? "").trim(),
    city: String(raw.city ?? "").trim(),
    message: String(raw.message ?? "").trim(),
    company: String(raw.company ?? "").trim()
  };

  const errors: Record<string, string> = {};

  if (data.company) errors.form = "Não foi possível enviar.";
  if (data.name.length < 2 || data.name.length > 100) {
    errors.name = "Informe seu nome.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 160) {
    errors.email = "Informe um e-mail válido.";
  }
  if (!projectTypes.has(data.projectType)) {
    errors.projectType = "Selecione o tipo de projeto.";
  }
  if ((data.city ?? "").length > 120) {
    errors.city = "Revise a cidade informada.";
  }
  if (data.message.length < 10 || data.message.length > 3000) {
    errors.message = "Conte brevemente sobre o projeto.";
  }

  return Object.keys(errors).length
    ? { ok: false, errors }
    : { ok: true, data };
}

export function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      })[char] ?? char
  );
}
