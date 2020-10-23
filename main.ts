import { serve } from "./deps.ts";

const server = serve({ port: 3001 });
console.log("Starting server on http://0.0.0.0:3001");
console.log(Deno.env.toObject());

for await (const request of server) {
  console.log("Received request");
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: bodyContent });
}
