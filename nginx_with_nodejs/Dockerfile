# Use a imagem base do Node.js
FROM node:15

WORKDIR /usr/src/app

# Copie os arquivos do aplicativo para o contêiner
COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
