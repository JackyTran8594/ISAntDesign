
### STAGE 1: BUILD ###
FROM node:16.10-alpine AS build
# Create a Virtual directory inside the docker image
WORKDIR /app
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm install
RUN npm run build --configuration=production

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:1.17.1-alpine AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /app/dist/ant-app /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

# COPY dist/ant-app /var/www
# COPY /nginx.conf /etc/nginx/nginx.conf
# EXPOSE 8094
