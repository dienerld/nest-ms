# Use a Node.js image como base
FROM node:18

# Crie um diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos package.json e yarn.lock para o contêiner
COPY package.json yarn.lock ./

# Instale as dependências
RUN yarn install

# Copie todo o código-fonte para o contêiner
COPY . .

# Exponha a porta que o aplicativo NestJS está ouvindo
EXPOSE 3000


CMD [ "yarn",  "start:dev" ]
