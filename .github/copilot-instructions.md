# GitHub Copilot Instructions

## Project Overview

This is a simple Node.js web application that displays haikus with images. It's designed as a demonstration project for GitHub Codespaces and serves as a template for learning and testing deployment workflows. The app is containerized and includes CI/CD pipelines for building and publishing Docker images to GitHub Container Registry (GHCR).

## Tech Stack

- **Runtime**: Node.js (>= 18)
- **Framework**: Express.js for web server
- **Template Engine**: EJS for rendering views
- **Development**: nodemon for auto-reloading
- **Containerization**: Docker and Docker Compose
- **CI/CD**: GitHub Actions for automated builds
- **Deployment**: Azure App Service compatible

## Coding Standards

### JavaScript Style
- Use `let` and `const` instead of `var`
- Prefer ES6+ features where appropriate
- Keep code simple and readable
- Follow existing code formatting in the project

### Express.js Conventions
- Use middleware patterns consistently
- Keep route handlers concise
- Separate concerns (routes, views, static assets)
- Use environment variables for configuration (PORT, etc.)

### File Organization
- Static assets go in `public/` directory
- EJS templates go in `views/` directory
- Configuration files at root level
- Docker-related files at root level

### Comments
- Add comments only when necessary to explain complex logic
- Keep comments concise and up-to-date
- Prefer self-documenting code

### Error Handling
- Handle errors gracefully
- Provide meaningful error messages
- Don't expose sensitive information in errors

## Dependencies

### Production Dependencies
- `express`: Web framework
- `ejs`: Template engine

### Development Dependencies
- `nodemon`: Auto-reload during development

## Docker Standards

- Use official Node.js base images
- Follow multi-stage build patterns when beneficial
- Keep images lightweight
- Document exposed ports and environment variables
- Include appropriate `.dockerignore` file

## Testing and Quality

- Ensure the app starts successfully with `npm start`
- Test the development workflow with `npm run dev`
- Verify Docker builds complete successfully
- Check that GitHub Actions workflows pass

## Environment Variables

- `PORT`: Server port (defaults to 3000)
- Use `.env.example` as a template for environment configuration

## Important Files

- `index.js`: Main application entry point
- `haikus.json`: Data source for haiku content
- `package.json`: Dependencies and scripts
- `Dockerfile`: Container build instructions
- `docker-compose.yml`: Multi-container orchestration
- `.github/workflows/docker.yml`: CI/CD pipeline

## Deployment

- The app is designed to run on Azure App Service
- Docker images are automatically built and pushed to GHCR on pushes to `main`
- Container can be run locally or pulled from `ghcr.io/akb0700/9778tyxu8099-:latest`
