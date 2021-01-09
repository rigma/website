FROM node:latest AS build
WORKDIR /usr/src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run generate



FROM nginx:1.19-alpine

RUN set -x && \
  addgroup -g 10001 -S web && \
  adduser -S -u 10000 -G web -h /var/cache/nginx -s /sbin/nologin server && \
  apk add --no-cache tini && \
  ln -sf /dev/null /var/log/nginx/access.log && \
  ln -sf /dev/null /var/log/nginx/error.log && \
  ln -sf /dev/stdout /var/log/nginx/rigma.access.log && \
  ln -sf /dev/stderr /var/log/nginx/rigma.error.log && \
  touch /var/run/nginx.pid && \
  mkdir /tmp/nginx && \
  mkdir /etc/nginx/certificates && \
  mkdir /etc/nginx/sites-available && \
  mkdir /etc/nginx/sites-enabled && \
  chown -R server:web /var/cache/nginx && \
  chmod -R g+w /var/cache/nginx && \
  chown -R server:web /etc/nginx && \
  chmod -R g+w /etc/nginx && \
  chown -R server:web /var/log/nginx && \
  chmod -R g+w /var/log/nginx && \
  chown -R server:web /tmp/nginx && \
  chmod -R g+w /tmp/nginx && \
  chown server:web /var/run/nginx.pid

COPY --from=build --chown=10000:10001 /usr/src/dist /var/www
COPY --chown=10000:10001 docker/nginx.conf /etc/nginx/nginx.conf
COPY --chown=server:web docker/http.conf docker/http2.conf /etc/nginx/sites-available/
COPY docker/docker-entrypoint.sh .
RUN chmod +x docker-entrypoint.sh

VOLUME [ "/etc/nginx/certificates" ]

ENTRYPOINT [ "/sbin/tini", "--" ]
EXPOSE 8080 8443
STOPSIGNAL SIGQUIT

CMD [ "./docker-entrypoint.sh", "nginx", "-g", "daemon off;" ]
