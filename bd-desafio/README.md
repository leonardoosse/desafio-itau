# Banco de Dados desafio_itau

Banco de dados SQLServer desenvolvido para armazenar as informação do segmento do cliente

Para teste da aplicação, podemos subir o banco de dados em um contêiner

## Build e Deploy do Banco de Dados para Validação (local)

1. Caso ainda não feito, criar o diretório de pastas e baixar o projeto desafio-itau do Github.

```
mkdir -p ~/desafio-temp
cd ~/desafio-temp
git clone https://github.com/leonardoosse/desafio-itau.git
```

2. Acessar o diretório da Banco de Dados.

```
cd ~/desafio-temp/desafio-itau/bd-desafio
```

3. Definir a Senha do Usuario SA

```
DB_PASSWORD=LLX5Z@Uqhan8
```

4. Criar o contêiner a partir da imagem do SQLServer. 

```
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=$DB_PASSWORD" \
   -p 1433:1433 --name bd-desafio -h host-sql-server \
   -d mcr.microsoft.com/mssql/server:2019-latest
```  

5. Copiar os arquivos SQL para o contêiner
```
docker cp .  bd-desafio:/tmp
```

6. Criar banco de dados. 

```
docker exec -it bd-desafio /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U SA -P $DB_PASSWORD \
   -i /tmp/DDL/create_database.sql
```  

7. Criar tabela. 

```
docker exec -it bd-desafio /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U SA -P $DB_PASSWORD \
   -i /tmp/DDL/create_table.sql
```  

8. Inserir dados na tabela. 

```
docker exec -it bd-desafio /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U SA -P $DB_PASSWORD \
   -i /tmp/DML/insert.sql
```

9. Definir Senha do Usuário da Aplicação

```
USER_PASSWORD=FRzs@58OiTF
```

10. Criar o Usuário. 

```
docker exec -it bd-desafio /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U SA -P $DB_PASSWORD \
   -Q "USE desafio_itau; CREATE LOGIN user_desafio WITH PASSWORD = '$USER_PASSWORD'; CREATE USER user_desafio FOR LOGIN user_desafio;"
```  

11. Dar acesso da aplicação para o usuário 

```
docker exec -it bd-desafio /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U SA -P $DB_PASSWORD \
   -i /tmp/DCL/grant_user.sql
```  

12. Validar. Consultar tabela segmento com usuário da aplicação

```  
docker exec -it bd-desafio /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U user_desafio -P $USER_PASSWORD \
   -Q "use desafio_itau; SELECT * FROM segmentos"
```  

## Parando o Banco de Dados

Após realizar os testes no Banco de Dados, executar os passos abaixo:

1. Parar o contêiner  

```
docker stop bd-desafio
```

2. Remover o contêiner  

```
docker rm bd-desafio
```

Referência: https://docs.microsoft.com/pt-br/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash