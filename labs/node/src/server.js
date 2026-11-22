import { createServer as createHttpServer } from "node:http";
import { createGreeting } from "./greeting.js";

export function createServer() {
  return createHttpServer((request, response) => {
    const url = new URL(request.url ?? "/", "http://localhost");
    if (request.method === "GET" && url.pathname === "/greet") {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify({ message: createGreeting(url.searchParams.get("name")) }));
      return;
    }
    response.writeHead(404, { "content-type": "application/json" });
    response.end(JSON.stringify({ error: "Not found" }));
  });
}
