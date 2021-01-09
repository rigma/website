#!/bin/sh

set -e

if [ ! -z ${NGINX_CERTIFICATE+x} ]; then
  envsubst < /etc/nginx/sites-available/http2.conf > /etc/nginx/sites-enabled/http2.conf
else
  ln -s /etc/nginx/sites-available/http.conf /etc/nginx/sites-enabled/http.conf
fi

exec "$@"
