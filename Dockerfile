# Base image for Node.js
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the Next.js application
RUN npm run build

# Base image for running the application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app ./

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
