# Lightweight production image for the Node.js + Express app
FROM node:20-alpine

# Set production environment
ENV NODE_ENV=production
WORKDIR /usr/src/app

# Install only production dependencies first for better layer caching
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

# Copy the rest of the app
COPY . .

# Run as non-root for better security
USER node

# The app listens on 3000 by default
EXPOSE 3000

# Start the server
CMD ["node", "index.js"]
