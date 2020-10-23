import { serve } from "./deps.ts";

const server = serve({ port: 3000, hostname: "0.0.0.0" });

for await (const request of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: bodyContent });
}
