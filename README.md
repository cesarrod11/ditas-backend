## 💻 Executando a API local
  ```bash
    # Criando container com instância do postgres
    docker run --name database -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

    # Criando container com instância do mongo
    docker run --name mongodb -p 27017:27017 -d -t mongo

    # Criando container com instância do redis
    docker run --name redis -p 6379:6379 -d -t redis:alpine

    # Inicializando as instâncias
    docker start database mongodb redis
  ```

  ```bash
    # Baixar as dependências
    yarn

    # Executar as migrations
    yarn typeorm migration:run

    # Inicializar o servidor de desenvolvimento
    yarn dev:server
  ```
