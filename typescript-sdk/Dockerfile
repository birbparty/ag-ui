FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PORT="9999"
ENV SERVER_STARTER_URL="http://host.docker.internal:8000"
ENV SERVER_STARTER_ALL_FEATURES_URL="http://host.docker.internal:8001"
ENV AGNO_URL="http://host.docker.internal:8002"
ENV CREW_AI_URL="http://host.docker.internal:8003"
ENV LANGGRAPH_FAST_API_URL="http://host.docker.internal:8004"
ENV LANGGRAPH_PYTHON_URL="http://host.docker.internal:8005"
ENV LANGGRAPH_TYPESCRIPT_URL="http://host.docker.internal:8006"
ENV LLAMA_INDEX_URL="http://host.docker.internal:8007"
ENV MASTRA_URL="http://host.docker.internal:8008"
ENV PYDANTIC_AI_URL="http://host.docker.internal:8009"
ENV NEXT_PUBLIC_CUSTOM_DOMAIN_TITLE="cpkdojo.local___CopilotKit Feature Viewer"
RUN corepack enable

RUN apt-get update && apt-get install -y git

COPY . /app
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .

RUN pnpm install --frozen-lockfile

RUN mkdir -p /app/apps/dojo/e2e2
WORKDIR /app/apps/dojo/e2e2
COPY apps/dojo/e2e2/package.json apps/dojo/e2e2/pnpm-lock.yaml apps/dojo/e2e2/pnpm-workspace.yaml .
RUN pnpm install --frozen-lockfile


COPY . .

WORKDIR /app

RUN pnpm build --filter=demo-viewer...

WORKDIR /app/apps/dojo

EXPOSE 9999

CMD ["pnpm", "exec", "next", "start", "-H", "0.0.0.0", "-p", "9999"]