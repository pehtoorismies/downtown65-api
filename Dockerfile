FROM node:10.14.1-alpine

ENV WORKDIR=/home/node/app

WORKDIR ${WORKDIR}

COPY . ${WORKDIR}

ENV PRISMA_ENDPOINT=http://prisma:4466
ENV AUTH0_DOMAIN=dt65.eu.auth0.com
ENV AUTH0_CLIENT_ID=voTel0EhKIfSGs2DE2UXNurD5VNioFwK
ENV AUTH0_CLIENT_SECRET=auth0_clientsecret

RUN npm install
RUN npm run build

EXPOSE 4000
ENTRYPOINT ["npm", "run"]
CMD ["serve"]