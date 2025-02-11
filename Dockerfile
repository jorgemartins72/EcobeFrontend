FROM node:lts-alpine as builder

RUN mkdir -p app
WORKDIR /app

COPY . .

RUN npm install npm@latest -g
RUN npm install
RUN npm run build

FROM node:lts-alpine

ENV APP_HOME=/home/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY --from=builder /app/.output $APP_HOME/.output
COPY --from=builder /app/.nuxt $APP_HOME/.nuxt

RUN npm install npm@latest -g

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
