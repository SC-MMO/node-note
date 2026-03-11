#!/bin/sh

mkdir -p /etc/nginx/certs
mkdir -p /etc/nginx/private

if [ -f /certs/node-note.crt ] && [ -f /private/node-note.key ]; then
    echo "Using provided certificates"
    cp /certs/node-note.crt /etc/nginx/certs/
    cp /private/node-note.key /etc/nginx/private/

elif [ -f /etc/nginx/certs/node-note.crt ] && [ -f /etc/nginx/private/node-note.key ]; then
    echo "Certificate already exists in the required directories"

else
    echo "Generating temporary certificate"

    openssl req -x509 -nodes -days 365 \
      -newkey rsa:2048 \
      -keyout /etc/nginx/private/node-note.key \
      -out /etc/nginx/certs/node-note.crt \
      -subj "/CN=node-note"
fi
