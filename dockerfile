#especifico que imagen y que version voy a usar para el presente proyecto
FROM node:14
#ademas con el comando RUN ejecutaremos un comando de linux en el cual  le diremos que cree una carpeta en la sgiueinte direccion 
#direcion de la documentacion de node 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["npm","run","dev"]