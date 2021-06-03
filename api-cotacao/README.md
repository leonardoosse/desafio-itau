# API Cotação api-cotacao

API desenvolvida para a realização do Cálculo da Cotação da Moeda.

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
mkdir -p ~/work/desafio-itau
cd ~/work/desafio-itau
git clone https://github.com/leonardoosse/desafio-itau.git
```

2. Acessar o diretório da API .

```
cd desafio-itau/api-cotacao
```

1. Gerar a imagem 

`docker build -t api-cotacao:1.0.0 -f Dockerfile . `  

2. Criar o contêiner a partir da imagem gerada. 

`docker run -p 8081:5002 --name api-cotacao -d api-cotacao:1.0.0`

3. Acessar o endereço http://localhost:8081/conversao para validar a aplicação.

4. Subir a imagem para o um Repositório

`docker push api-cotacao:1.0.0`

5. Parar o contêiner  

`docker stop api-cotacao`  

6. Remover o contêiner  

`docker rm api-cotacao`  

7. Remover a imagem

`docker rmi api-cotacao:1.0.0 -f `  

8. Limpa Todas as Imagens, Contêineres, Volumes e Redes não Utilizadas ou Pendentes.

``` 
docker container prune -f
docker image prune -f
docker volume prune -f
docker system prune -f
```