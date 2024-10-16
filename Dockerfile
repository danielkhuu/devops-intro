FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Start the app when the container runs
CMD ["node", "index.js"]
