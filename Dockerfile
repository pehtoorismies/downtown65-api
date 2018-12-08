FROM node:8.12.0-alpine

ENV WORKDIR=/home/node/app

WORKDIR ${WORKDIR}

COPY . ${WORKDIR}

ENV PRISMA_ENDPOINT=http://localhost:4466
ENV PRISMA_SECRET=prisma-secret

RUN yarn --ignore-optional --pure-lockfile
RUN yarn build 

EXPOSE 4000
ENTRYPOINT ["yarn"]
CMD ["serve"]