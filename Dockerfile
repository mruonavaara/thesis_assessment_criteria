# Use an official Node runtime as a parent image
FROM node:19-alpine as build
# Set the working directory to /app
WORKDIR /app
# Copy the package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm ci
# Copy the rest of the application code to the container
COPY . .
# Build the React app
RUN npm run build

# Use default Nginx image
FROM nginx
# Copy the nginx.conf to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the React app build files to the container
COPY --from=build /app/build /usr/share/nginx/html/
RUN chmod -R g+rw /etc/nginx/conf.d /usr/share/nginx/html/
# Expose port 8080 for Nginx
EXPOSE 8080
# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]