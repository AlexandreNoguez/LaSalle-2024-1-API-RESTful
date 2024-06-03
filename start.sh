#!/bin/bash

# Navegue para o diretório do cliente
cd client

# Instale as dependências e execute o servidor de desenvolvimento do cliente
npm install && npm run dev &

# Navegue para o diretório do servidor
cd ../server

# Instale as dependências e execute o servidor de desenvolvimento do servidor
npm install && npm run dev &

# Aguarde um segundo para garantir que os servidores tenham iniciado corretamente
sleep 1

# Abra o navegador padrão na URL especificada
case "$(uname -s)" in
    Linux*)     xdg-open "http://localhost:5173/";;
    Darwin*)    open "http://localhost:5173/";;
    CYGWIN*)    start "http://localhost:5173/";;
    MINGW*)     start "http://localhost:5173/";;
    *)          echo "Não foi possível detectar o sistema operacional";;
esac
