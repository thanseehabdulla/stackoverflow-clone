# Stage 1: Build the React application
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Create necessary directories and set permissions
RUN mkdir -p /var/run/nginx /var/tmp/nginx /var/cache/nginx /tmp/client_temp /tmp/proxy_temp /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp \
    && chown -R 1001:1001 /var/run/nginx /var/tmp/nginx /var/cache/nginx /tmp/client_temp /tmp/proxy_temp /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp \
    && chmod -R 777 /var/run/nginx /var/tmp/nginx /var/cache/nginx /tmp

# Copy the built React application from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY config/nginx.conf /etc/nginx/nginx.conf

# Expose the port Nginx is running on
EXPOSE 8080

# Switch to a non-root user
USER 1001

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
