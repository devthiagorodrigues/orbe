import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const config = JSON.parse(
  fs.readFileSync(path.join(root, "content/site.config.json"), "utf8")
);
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "public/asset-manifest.json"), "utf8")
);

const failures = [];

if (config.product !== "GO") {
  failures.push(`Produto inesperado: ${config.product}`);
}

if (config.sectionIds.length !== 6) {
  failures.push(`GO deve ter exatamente 6 seções; encontrado: ${config.sectionIds.length}`);
}

if (config.sectionIds.length > config.maxContentSections) {
  failures.push("Limite de seções do GO excedido.");
}

if (config.projectCount !== 4) {
  failures.push(`Portfólio deveria ter 4 projetos; encontrado: ${config.projectCount}`);
}

if (!String(config.heroVideo).startsWith("https://res.cloudinary.com/")) {
  failures.push("Hero video não aponta para Cloudinary.");
}

for (const publicPath of Object.keys(manifest.images)) {
  const localPath = path.join(root, "public", publicPath.replace(/^\//, ""));
  if (!fs.existsSync(localPath)) {
    failures.push(`Asset ausente: ${publicPath}`);
  }
}

for (const requiredDoc of [
  "docs/00-current-scope.md",
  "docs/plan/04-estrategia.md",
  "docs/plan/05-conteudo.md",
  "docs/plan/06-arquitetura.md",
  "docs/plan/07-direcao-visual.md",
  "docs/plan/08-design.md"
]) {
  if (!fs.existsSync(path.join(root, requiredDoc))) {
    failures.push(`Documento ausente: ${requiredDoc}`);
  }
}

if (failures.length) {
  console.error("\nORBE project validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("ORBE project validation: OK");
console.log(`- Produto: ${config.product}`);
console.log(`- Seções: ${config.sectionIds.length}/${config.maxContentSections}`);
console.log(`- Projetos: ${config.projectCount}`);
console.log(`- Imagens: ${Object.keys(manifest.images).length}`);
console.log("- Hero video: Cloudinary OK");
