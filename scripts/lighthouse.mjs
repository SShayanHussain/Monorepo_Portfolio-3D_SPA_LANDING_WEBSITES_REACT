#!/usr/bin/env node
/**
 * `pnpm lighthouse <site>` — builds the named site, then runs lighthouse-ci
 * against its static output using the budget in lighthouserc.cjs. Exits non-zero
 * if the performance budget is exceeded, so it can gate CI / a pre-ship check.
 *
 * Usage:
 *   pnpm lighthouse saas-startup
 *   pnpm lighthouse restaurant
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const site = process.argv[2];
if (!site) {
  console.error("Usage: pnpm lighthouse <site>   e.g. pnpm lighthouse saas-startup");
  process.exit(1);
}

const siteDir = resolve(root, "sites", site);
if (!existsSync(siteDir)) {
  console.error(`Unknown site "${site}" — no directory at sites/${site}`);
  process.exit(1);
}

const run = (cmd, args) =>
  execFileSync(cmd, args, { stdio: "inherit", cwd: root, shell: process.platform === "win32" });

console.log(`\n▶ Building sites/${site} …`);
run("pnpm", ["--filter", site, "build"]);

const distDir = resolve(siteDir, "dist");
if (!existsSync(distDir)) {
  console.error(`Build produced no dist/ for ${site} — expected ${distDir}`);
  process.exit(1);
}

console.log(`\n▶ Running Lighthouse CI against ${site}/dist …`);
run("pnpm", [
  "exec",
  "lhci",
  "autorun",
  `--collect.staticDistDir=${distDir}`,
  "--config=lighthouserc.cjs",
]);
