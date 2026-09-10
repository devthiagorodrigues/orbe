"use client";

import { FormEvent, useRef, useState } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  errors: Record<string, string>;
  message?: string;
};

const initialState: FormState = { status: "idle", errors: {} };

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const statusRef = useRef<HTMLDivElement>(null);

  function focusFirstError(form: HTMLFormElement, errors: Record<string, string>) {
    const firstError = Object.keys(errors).find((field) => field !== "form");
    if (!firstError) {
      statusRef.current?.focus();
      return;
    }

    const field = form.elements.namedItem(firstError);
    if (field instanceof HTMLElement) field.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());
    setState({ status: "loading", errors: {} });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as {
        ok?: boolean;
        errors?: Record<string, string>;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        const errors = data.errors ?? {};
        setState({
          status: "error",
          errors,
          message: data.message ?? "Não foi possível enviar agora."
        });
        requestAnimationFrame(() => focusFirstError(form, errors));
        return;
      }

      form.reset();
      setState({
        status: "success",
        errors: {},
        message: "Recebemos sua mensagem. O próximo passo é entender melhor o seu projeto."
      });
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setState({
        status: "error",
        errors: {},
        message: "Não foi possível enviar agora. Tente novamente."
      });
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  const errorFor = (field: string) => state.errors[field];
  const statusMessage = state.status === "loading" ? "Enviando sua mensagem…" : state.message;

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={state.status === "loading"}
    >
      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      <div className="form-field">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          aria-invalid={Boolean(errorFor("name"))}
          aria-describedby={errorFor("name") ? "name-error" : undefined}
        />
        <span id="name-error" className="form-error">{errorFor("name") ?? ""}</span>
      </div>

      <div className="form-field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={160}
          aria-invalid={Boolean(errorFor("email"))}
          aria-describedby={errorFor("email") ? "email-error" : undefined}
        />
        <span id="email-error" className="form-error">{errorFor("email") ?? ""}</span>
      </div>

      <div className="form-field">
        <label htmlFor="projectType">Tipo de projeto</label>
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          required
          aria-invalid={Boolean(errorFor("projectType"))}
          aria-describedby={errorFor("projectType") ? "project-type-error" : undefined}
        >
          <option value="" disabled>Selecione</option>
          <option>Arquitetura residencial</option>
          <option>Interiores</option>
          <option>Arquitetura comercial</option>
          <option>Reforma</option>
          <option>Consultoria</option>
          <option>Outro</option>
        </select>
        <span id="project-type-error" className="form-error">{errorFor("projectType") ?? ""}</span>
      </div>

      <div className="form-field">
        <label htmlFor="city">Cidade <span>(opcional)</span></label>
        <input
          id="city"
          name="city"
          type="text"
          autoComplete="address-level2"
          maxLength={120}
          aria-invalid={Boolean(errorFor("city"))}
          aria-describedby={errorFor("city") ? "city-error" : undefined}
        />
        <span id="city-error" className="form-error">{errorFor("city") ?? ""}</span>
      </div>

      <div className="form-field form-field--full">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={3000}
          aria-invalid={Boolean(errorFor("message"))}
          aria-describedby={errorFor("message") ? "message-error" : undefined}
        />
        <span id="message-error" className="form-error">{errorFor("message") ?? ""}</span>
      </div>

      <div className="contact-form__footer form-field--full">
        <button type="submit" disabled={state.status === "loading"}>
          {state.status === "loading" ? "Enviando…" : "Enviar mensagem"}
        </button>

        <div
          className="form-status"
          data-status={state.status}
          aria-live={state.status === "error" ? "assertive" : "polite"}
          role="status"
        >
          <div ref={statusRef} tabIndex={-1}>
            {statusMessage}
          </div>
        </div>
      </div>
    </form>
  );
}
