import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { agentsIntegrations } from "@/agents";

import { NextRequest } from "next/server";

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

export async function POST(request: NextRequest) {
  const integrationId = request.url.split("/").pop();

  const integration = agentsIntegrations.find((i) => i.id === integrationId);
  if (!integration) {
    return new Response("Integration not found", { status: 404, headers: CORS_HEADERS });
  }
  const agents = await integration.agents();
  const runtime = new CopilotRuntime({
    // @ts-ignore for now
    agents,
  });
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: new ExperimentalEmptyAdapter(),
    endpoint: `/api/copilotkit/${integrationId}`,
  });

  const res = await handleRequest(request);
  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}
