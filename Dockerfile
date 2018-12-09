FROM node:10.14.1-alpine

ENV WORKDIR=/home/node/app

WORKDIR ${WORKDIR}

COPY . ${WORKDIR}

ENV PRISMA_ENDPOINT=http://prisma:4466
ENV PRISMA_SECRET=prisma-secret

RUN npm install
RUN npm run build

EXPOSE 4000
ENTRYPOINT ["npm", "run"]
CMD ["start-prod"]