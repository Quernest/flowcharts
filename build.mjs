import { exec } from "node:child_process";
import fs from "node:fs/promises";

async function build() {
  await fs.rm("dist", { recursive: true, force: true });
  await exec("npx vite build", { cwd: "packages/lib" });
  await exec("npx vite build", { cwd: "packages/example-app" });
  await fs.cp("packages/example-app/dist", "dist", { recursive: true });
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
