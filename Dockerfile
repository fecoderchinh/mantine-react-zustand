FROM node:18.20.2 AS builder

ENV NODE_ENV build

USER root

WORKDIR /frontend

COPY package*.json ./
RUN yarn

COPY --chown=node:node . .
RUN npx vite build

FROM node:18.20.2

USER node

WORKDIR /frontend

COPY --from=builder --chown=node:node /frontend/package*.json ./
COPY --from=builder --chown=node:node /frontend/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /frontend/dist/ ./dist/
