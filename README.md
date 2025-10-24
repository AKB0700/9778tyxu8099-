# Haikus for Codespaces

This is a quick node project template for demoing Codespaces. It is based on the [Azure node sample](https://github.com/Azure-Samples/nodejs-docs-hello-world). It's great!!!

Point your browser to [Quickstart for GitHub Codespaces](https://docs.github.com/en/codespaces/getting-started/quickstart) for a tour of using Codespaces with this repo.

## Run locally

```bash
npm install
npm run dev   # auto-reload with nodemon
# or
npm start
```

## Docker

```bash
docker build -t haikus-app:latest .
docker run --rm -p 3000:3000 haikus-app:latest
```

## Docker Compose

```bash
docker compose up --build
```

## GitHub Actions (CI)

On push to `main`, a Docker image is built and pushed to GHCR.
