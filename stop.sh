#!/bin/bash

# Parar os servidores do cliente e do servidor
pkill -f "npm run dev"

# Aguarde um segundo para garantir que os servidores tenham sido encerrados corretamente
sleep 1
