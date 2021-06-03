# Aplicação front-desafio

Aplicação que permite ao usuário realizar:
* cotação da compra de moeda estrangeira 
* parametrização e consulta da taxa cobrada por segmento.

A Aplicação foi desenvolvida em [Angular](https://github.com/angular/angular-cli) versão 12.0.2.


## Acesso a Aplicação

Para acessar a aplicação, será necessário publicá-la em um ambiente de teste ([localhost](#execução-em-docker-para-validação-local)) e subir suas dependências:
* [Banco de Dados](https://github.com/leonardoosse/desafio-itau/tree/master/bd-desafio#build-e-deploy-da-api-para-valida%C3%A7%C3%A3o-local).
* [API de Cotação](https://github.com/leonardoosse/desafio-itau/tree/master/api-cotacao#build-e-deploy-da-api-para-valida%C3%A7%C3%A3o-local).
* [API de Segmento](https://github.com/leonardoosse/desafio-itau/tree/master/api-segmento#build-e-deploy-da-api-para-valida%C3%A7%C3%A3o-local). 

Após subir a Aplicaçao, ela estará acessível pelo endereço http://localhost:5000/


## Build e Deploy da API para Validação (local)

1. Caso ainda não feito, criar o diretório de pastas e baixar o projeto desafio-itau do Github.

```
mkdir -p ~/desafio-temp
cd ~/desafio-temp
git clone https://github.com/leonardoosse/desafio-itau.git
```

2. Acessar o diretório da API .

```
cd desafio-itau/front-desafio
```

1. Gerar a imagem 

`docker build -t leonardoosse/front-desafio:1.0.0 -f Dockerfile . `  

2. Se desejar, subir a imagem em um repositório (DockerHub, ECR, ACR)

`docker push leonardoosse/front-desafio:1.0.0`

3. Criar o contêiner a partir da imagem gerada. 

`docker run -p 5000:80 --name front-desafio -d leonardoosse/front-desafio:1.0.0`

4. Acessar o endereço http://localhost:5000/ para validar a aplicação.

## Parando a Aplicação

1. Parar o contêiner  

`docker stop front-desafio`  

2. Remover o contêiner  

`docker rm front-desafio`  

3. Remover a imagem

`docker rmi leonardoosse/front-desafio:1.0.0 -f `  
