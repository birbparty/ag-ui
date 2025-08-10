FROM python:alpine


RUN mkdir -p /app

ENV POETRY_VIRTUALENVS_IN_PROJECT=false

ENV PORT=8004

RUN apk add --no-cache rust cargo

RUN pip install uv pipx

RUN pipx install poetry

WORKDIR /app

COPY poetry.lock pyproject.toml .

COPY . .

RUN /root/.local/bin/poetry install

CMD ["/root/.local/bin/poetry", "run", "dev"]