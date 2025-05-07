import { exec as rawExec } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs/promises";
import path from "node:path";

const exec = promisify(rawExec);

async function build() {
  try {
    console.log("🧹 Cleaning root dist...");
    await fs.rm("dist", { recursive: true, force: true });

    console.log("📦 Building lib...");
    await exec("npx vite build", { cwd: "packages/lib" });

    console.log("📦 Building example-app...");
    await exec("npx vite build", { cwd: "packages/example-app" });

    const exampleDistPath = path.resolve("packages/example-app/dist");
    const rootDistPath = path.resolve("dist");

    console.log("📁 Moving example-app/dist to root dist...");
    await fs.cp(exampleDistPath, rootDistPath, { recursive: true });

    console.log("✅ Build complete!");
  } catch (err) {
    console.error("❌ Build failed:", err);
    process.exit(1);
  }
}

build();
