FROM node:stretch



ADD ./api/ /home/node/api/
COPY docker-entrypoint/entrypoint.sh /home/node/api/entrypoint.sh

RUN chmod 777 /home/node/api/entrypoint.sh
WORKDIR /home/node/api

ENTRYPOINT [ "/home/node/api/entrypoint.sh" ]

EXPOSE 3000
