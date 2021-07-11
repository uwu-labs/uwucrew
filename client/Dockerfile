FROM node:15-alpine AS base

WORKDIR /base

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

FROM base AS build

WORKDIR /build
COPY --from=base /base ./

RUN yarn run build

FROM node:15-alpine AS production

RUN apk add --no-cache dumb-init

WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/yarn.lock ./
COPY --from=build /build/locales ./
COPY --from=build /build/i18n.json ./
COPY --from=build /build/src/.next ./.next
COPY --from=build /build/src/public ./public

RUN yarn add next

EXPOSE 3000

CMD ["dumb-init", "yarn", "run", "start"]
