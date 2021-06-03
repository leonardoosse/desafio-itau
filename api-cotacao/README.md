# API Cotação api-cotacao

API para a realização do Cálculo da Cotação da Moeda.

A API foi desenvolvida em .Net Core 3.1.

## Chamada da API para a realização da Cotação

Para validar o cálculo, será necessário subir a API em um ambiente de teste. ([localhost](#execução-em-docker-para-validação-local))

Após subir a API no ambiente local, realizar um POST no endereço http://localhost:8081/conversao/calcular, passando o Request:
```
{
    "taxaMoeda" : 1,
    "taxaSegmento" : 2,
    "valorDesejado": 3
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
cd desafio-itau/api-cotacao
```

1. Gerar a imagem 

`docker build -t leonardoosse/api-cotacao:1.0.0 -f Dockerfile . `  

2. Se desejar, subir a imagem em um repositório (DockerHub, ECR, ACR)

`docker push leonardoosse/api-cotacao:1.0.0`

3. Criar o contêiner a partir da imagem gerada. 

`docker run -p 8081:5002 --name api-cotacao -d leonardoosse/api-cotacao:1.0.0`

4. Acessar o endereço http://localhost:8081/conversao para verificar se a API está em execução.

## Parando a API

Após realizar os testes da API, executar os passos abaixo:

1. Parar o contêiner  

`docker stop api-cotacao`  

2. Remover o contêiner  

`docker rm api-cotacao`  

3. Remover a imagem

`docker rmi leonardoosse/api-cotacao:1.0.0 -f `  
