# This file is the main docker file configurations

# Official Node JS runtime as a parent image
FROM node:22-alpine

# Set the working directory to ./app
WORKDIR /app

# Install app dependencies
# Copy package manifests first to leverage Docker layer caching
COPY package*.json ./

RUN apk add --no-cache git

# Install dependencies using the lockfile for reproducible builds
RUN npm ci

# Bundle app source
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["npm", "start"]
