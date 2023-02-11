# Use an official Node.js runtime as the base image
FROM node:19-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React application
RUN npm run build

# Set the environment to production
ENV NODE_ENV=production

# Expose port 3000 for the React application to listen on
EXPOSE 3000

# Serve the build directory using `serve` package
CMD [ "npx", "serve", "-s", "build", "-l", "3000" ]