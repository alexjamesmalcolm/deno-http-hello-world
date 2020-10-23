import { serve } from "./deps.ts";
const hostname = "0.0.0.0";
const port = 3000;
const server = serve({ port, hostname });
console.log(`Starting server on http://${hostname}:${port}`);
console.log(Deno.env.toObject());

for await (const request of server) {
  console.log("Received request");
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: bodyContent });
}
