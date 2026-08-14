FROM nginx:1.29.3

COPY certs /certs
COPY private /private

COPY ./nginx.conf  /etc/nginx/nginx.conf
COPY ./entrypoint.sh /docker-entrypoint.d/99-generate-certs.sh

RUN chmod +x /docker-entrypoint.d/99-generate-certs.sh
