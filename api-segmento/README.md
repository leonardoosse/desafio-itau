# API Segmento api-segmento

API para consultar e parametrizar a taxa do segmento do cliente.

A API foi desenvolvida em .Net Core 3.1.

## Chamada da API para listar e atualizar

Para realizar a validação, será necessário subir a API em um ambiente de teste ([localhost](#execução-em-docker-para-validação-local)) e suas dependências:
* [Banco de Dados](https://github.com/leonardoosse/desafio-itau/tree/master/bd-desafio#build-e-deploy-do-banco-de-dados-para-valida%C3%A7%C3%A3o-local) em um Ambiente de Teste 

Após subir a API no ambiente local, listar os segmentos no endereço http://localhost:8080/segmentos.

Para atualizar a taxa do segmento, realizar um PUT no endereço http://localhost:8081/segmentos/atualizar/{id}, informando no **id** o código do segmento a ser alterado e passando o Request:
```
{
    "id" : 1,
    "nome" : Varejo,
    "taxa": 3
}
```

## Build e Deploy da API para Validação (local)

1. Caso ainda não feito, criar o diretório de pastas e baixar o projeto desafio-itau do Github.

```
mkdir -p ~/desafio-temp
cd ~/desafio-temp
git clone https://github.com/leonardoosse/desafio-itau.git
```

2. Acessar o diretório da API .

```
cd ~/desafio-temp/desafio-itau/api-segmento
```

3. Informar a senha do usuário da aplicação definida na criação do banco de Dados

```
USER_PASSWORD=FRzs@58OiTF
```

4. Atualizar a connectionString para o IP local e a senha do usuário da aplicação.

```
ipLocal=$(hostname -I | awk '{print $1}') && echo $ipLocal
conexao=$(echo "Server=$ipLocal,1433;Database=desafio_itau;Uid=user_desafio;Pwd=$USER_PASSWORD" | base64)
jq ".ConnectionStrings.ConexaoDesafioItau = \"$conexao\"" APISegmento/appsettings.json > tmp.$$.json && mv tmp.$$.json APISegmento/appsettings.json
```

1. Gerar a imagem 

```
docker build -t leonardoosse/api-segmento:1.0.0 -f Dockerfile . 
```

2. Se desejar, subir a imagem em um repositório (DockerHub, ECR, ACR)

```
docker push leonardoosse/api-segmento:1.0.0
```

3. Criar o contêiner a partir da imagem gerada. 

```
docker run -p 8080:5001 --name api-segmento -d leonardoosse/api-segmento:1.0.0
```

4. Acessar o endereço http://localhost:8080/segmentos para validar a aplicação.

## Parando a API

Após realizar os testes da API, executar os passos abaixo:

1. Parar o contêiner  

```
docker stop api-segmento
```

2. Remover o contêiner  

```
docker rm api-segmento
```

3. Remover a imagem

```
docker rmi leonardoosse/api-segmento:1.0.0 -f 
```


