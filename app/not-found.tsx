import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Página não encontrada.</h1>
      <Link className="text-link" href="/">Voltar para a Orbe <span aria-hidden="true">→</span></Link>
    </main>
  );
}
