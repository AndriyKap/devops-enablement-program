import { cp, mkdir, rm } from "node:fs/promises";

const out = new URL("../dist/", import.meta.url);

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(new URL("../src/", import.meta.url), new URL("../dist/src/", import.meta.url), { recursive: true });
await cp(new URL("../tests/", import.meta.url), new URL("../dist/tests/", import.meta.url), { recursive: true });
