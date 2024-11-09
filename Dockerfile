# Use Node.js official image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
