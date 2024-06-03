# Resumo da Aplicação
- Este foi um projeto desenvolvido para disciplina de Tópicos especiais em ADS para a atividade avaliativa em que consiste a criação de uma API Restful que utilizasse um banco de dados não relacional (NoSQL), em que fosse utilizado uma colection e uma sub-colection.
- Tomei a liberdade e criei um front utilizando a biblioteca React para tornar a experiência do usuário mais rápida e fluida.

## Página inicial
- Na página home, temos apenas a tabela que será exibida caso haja produtos cadastrados ou uma mensagem dizendo que ainda não foram cadastrados produtos.
- Temos um cabeçalho que é compartilhado entre todos os componentes para facilitar a navegação entre as páginas.

## CRUD de produtos:
- A aplicação permite que os usuários façam adiçao de produtos com nome e categoria da qual o dashboard vai analisar a quantidade de items por categoria.
- É possível editar o produto clicando no lápis da tabela onde o produto é exibido.
- É possível deletar o produto clicando no X da tabela onde o produto é exibido.

## Criar comentários:
- Ao acessar o produto é possível fazer um comentário específico sobre aquele produto. Para não adicionar muita complexidade ao projeto, não identifiquei o usuário no comentário para que não precisasse utilizar de autenticação e cadastro de usuários, mantendo uma maneira mais simples neste primeiro momento.
- Ao acessar o produto em que o comentário foi feito, todos os comentários serão listados abaixo do produto.
- Para manter simples, não criei edição e remoção de comentários.

## Dashboard:
- Exibe os produtos em gráficos para quantificar quantos produtos existem em cada categoria.

### Para executar o projeto:
1. Clonar o reposiótio: 
```bash 
git clone https://github.com/AlexandreNoguez/LaSalle-2024-1-API-RESTful
```

2. Acesse o diretório do projeto e execute os comandos:
```bash
cd LaSalle-2024-1-API-RESTful/client
npm install
```

```bash
cd ../server
npm install
```
3. Configure o arquivo **.env** com as credenciais do seu banco de acordo com o **.env.example** tanto no cliente quanto no servidor.

4. Executando os projetos
```bash 
./start.sh
```

5. Quando terminar de executar todos os comandos, o projeto pode ser acessado no navegador <a href="http://localhost:5173">localhost</a>.

### Notas
- É necessário ter o nodejs 18+ instalado para executar o projeto localmente.