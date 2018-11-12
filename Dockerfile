FROM registry.access.redhat.com/rhscl/nodejs-8-rhel7

USER default

EXPOSE 8080

COPY . /app

WORKDIR /app

CMD ["node", "server.js"]
