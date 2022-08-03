FROM python:3.10.4-alpine

LABEL maintainer="Isabel Berrio Jimenez <isabelsena1993@gmail.com>"

RUN apk update \
    && pip install -U pip \
    && pip install pipenv \
    && mkdir -p /app/ 

WORKDIR /app

COPY ./Pipfile* /app/

RUN set -ex \
    && apk add --no-cache --virtual .build-deps build-base \
    # && pip install psycopg2 \
    && pipenv install --system \
    && apk del .build-deps

COPY ./compose/start /
RUN chmod +x /start

# ADD proyect to docker
COPY ./src/* /app/

CMD ["/start"]
