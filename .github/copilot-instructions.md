# Copilot Instructions for Haikus for Codespaces

## Project Overview

This is a simple Node.js web application that displays haikus with accompanying images. The application is designed as a template for demonstrating GitHub Codespaces and serves as an educational example for learning Node.js, Express, and containerization.

**Key Features:**
- Displays a collection of haikus with themed Octocat images
- Simple Express.js server with EJS templating
- Docker and Docker Compose support
- GitHub Actions CI/CD pipeline for automated Docker image builds
- Publishes to GitHub Container Registry (GHCR)

**Target Users:**
- Developers learning GitHub Codespaces
- Students exploring Node.js and Express
- DevOps engineers practicing containerization

## Tech Stack

- **Runtime**: Node.js (>= 18)
- **Framework**: Express.js (^4.21.2)
- **Template Engine**: EJS (^3.1.10)
- **Development**: nodemon (^2.0.19) for auto-reload
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Registry**: GitHub Container Registry (GHCR)

## File Structure

```
/
├── .github/
│   ├── workflows/
│   │   └── docker.yml          # CI/CD pipeline for Docker builds
│   └── copilot-instructions.md # This file
├── public/                     # Static assets
│   ├── css/                    # Stylesheets
│   └── images/                 # Octocat images for haikus
├── views/
│   └── index.ejs              # Main page template
├── index.js                    # Express server entry point
├── haikus.json                 # Haiku content and image references
├── package.json                # Node.js dependencies
├── Dockerfile                  # Container definition
├── docker-compose.yml          # Local development orchestration
└── README.md                   # User documentation
```

## Coding Guidelines

### JavaScript Style
- Use `let` and `const` instead of `var`
- Keep the code simple and readable (this is an educational project)
- Follow existing naming conventions in the codebase
- Maintain the minimalist approach - avoid over-engineering

### Express Application
- Server port should default to 3000 with environment variable override
- Keep routes in the main `index.js` file (no need to split for this small app)
- Use EJS for templating
- Serve static files from the `public` directory

### Docker
- Base image should remain compatible with Node.js >= 18
- Expose port 3000 in Dockerfile
- Keep images lean and production-ready
- Use multi-stage builds if adding complexity

### Dependencies
- Minimize external dependencies
- Use well-maintained, secure packages
- Update dependencies responsibly, testing thoroughly
- Run `npm audit` before adding new packages

### Git Workflow
- The main branch is `main`
- Docker images are built and pushed on every push to main
- Pull requests trigger Docker builds but don't push images

## Testing and Validation

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Run with auto-reload
npm start            # Run production mode
```

### Docker Testing
```bash
# Build and run with Docker
docker build -t haikus-app:latest .
docker run --rm -p 3000:3000 haikus-app:latest

# Or use Docker Compose
docker compose up --build
```

### Validation Checklist
- Application should start without errors
- Navigate to http://localhost:3000 to verify haikus display correctly
- All images should load properly
- CSS styling should be applied
- No console errors in browser or server logs

## CI/CD Pipeline

- **Trigger**: Push to `main` branch or pull requests to `main`
- **Process**: 
  1. Checkout code
  2. Set up Docker Buildx
  3. Authenticate with GHCR
  4. Build Docker image
  5. Push to GHCR (only on main branch pushes)
- **Image Tags**: `latest` for main branch, `sha-<commit>` for all builds

## Content Management

### Adding Haikus
1. Edit `haikus.json`
2. Add new haiku object with `text` and `image` fields
3. Ensure corresponding image exists in `public/images/`
4. Haiku text should follow 5-7-5 syllable pattern (traditional haiku structure)

### Image Requirements
- Place images in `public/images/`
- Use appropriate file extensions (.jpg, .jpeg, .png)
- Keep file sizes reasonable for web delivery

## Security Considerations

- No sensitive data should be committed to the repository
- Environment variables should be used for configuration (see `.env.example`)
- Regular `npm audit` checks for dependency vulnerabilities
- Container images should be scanned before deployment

## Common Tasks

### Update Dependencies
```bash
npm update
npm audit fix
npm test  # If tests exist
```

### Build for Production
```bash
docker build -t haikus-app:latest .
```

### View Published Images
- Registry: ghcr.io/akb0700/9778tyxu8099-
- Pull: `docker pull ghcr.io/akb0700/9778tyxu8099-:latest`

## Additional Notes

- This project is based on the Azure Node.js sample
- It's designed to be simple and educational - keep it that way!
- When making changes, consider the learning experience for new developers
- Documentation should be clear and beginner-friendly
