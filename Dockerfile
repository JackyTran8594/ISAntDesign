FROM nginx:1.17.1-alpine


COPY dist/ant-app /var/www
COPY /nginx.conf /etc/nginx/nginx.conf
EXPOSE 8594:8094
