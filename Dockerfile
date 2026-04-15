FROM node:20 AS react-build
WORKDIR /var/www/react-app
COPY react-app/package.json react-app/package-lock.json ./
RUN npm install
COPY react-app/ .
RUN CI=false NODE_OPTIONS=--openssl-legacy-provider npm run build

FROM python:3.11-slim
WORKDIR /var/www
ENV REACT_APP_BASE_URL=https://aa-pokezon.herokuapp.com/
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True
COPY --from=react-build /var/www/react-app/build ./app/static
COPY . .
RUN apt-get update && apt-get install -y gcc libpq-dev && rm -rf /var/lib/apt/lists/*
RUN pip install --no-cache-dir -r requirements.txt
CMD ["gunicorn", "app:app"]
