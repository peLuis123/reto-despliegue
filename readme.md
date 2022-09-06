Primero se crea el proyecto se inicializa con el npm init -y para tener nuestro package.json y poder configurarlo

como el presente proyecto trabajaremos con mongodb y nodejs por el momento solmamente instalaremos el  mongose y express con el siguiente comando
npm install express mongoose

en el archvio index.js estara el codigo fuente de nuestro proyecto mientras que en el server pondremos los puertos que usaremos para poder conectar con la base de datos 

para llamar a la imagen de mongodb no se necesita crear otro archivo dockerfile en su lugar se creara un archvio docker-compose y lo que aremos sera 