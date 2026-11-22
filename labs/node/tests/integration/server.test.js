import assert from "node:assert/strict";
import { once } from "node:events";
import test from "node:test";
import { createServer } from "../../src/server.js";

test("GET /greet responds over a real HTTP connection", async () => {
  const server = createServer();
  server.listen(0, "127.0.0.1");
  try {
    await once(server, "listening");
    const address = server.address();
    const response = await fetch(`http://127.0.0.1:${address.port}/greet?name=Andriy`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { message: "Hello, Andriy!" });
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  }
});
