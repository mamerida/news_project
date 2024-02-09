<h2 align="center" News Project <br/> </h2> 

## About Project :clipboard:

This project consumes [News Api](https://newsapi.org/). With it, you can see a selection of news, search by applying filters, and navigate to a specific one.




## Tecnologies ⚙️


[![CircleCi](https://skillicons.dev/icons?i=codepen&perline=3)](https://app.circleci.com/pipelines/github/mamerida/news_project) To Continuous Integration I used CircleCi 


 [![Test](https://skillicons.dev/icons?i=jest&perline=3)](https://skillicons.dev) Jest for test

[![Deploy](https://skillicons.dev/icons?i=githubactions&perline=3)](https://mamerida.github.io/news_project/) GH-Page for deploys


## Tools 🛠️
<p align="left">
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/js.png" alt=javascript width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/react.png" alt=javascript width="50" height="50"/>
<img style="margin: auto;" src="https://skillicons.dev/icons?i=vite&perline=3" alt=javascript width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/npm.png" alt=npm width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/node.png" alt=nodejs width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/git.png" alt=git width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/github.png" alt=github width="50" height="50"/>
<img style="margin: auto;" src="https://skillicons.dev/icons?i=docker&perline=3" alt=javascript width="50" height="50"/>

## Before starting :game_die:

1) create **.env file** in the project root with this format:
```
VITE_API_KEY = <your_api_key>
```
2) Install/Update node package JSON in your favorite terminal. Execute:
```
npm install
```
3) To start
```
npm run dev
```

## <img style="margin: auto;" src="https://skillicons.dev/icons?i=nodejs&perline=3" alt=javascript width="50" height="50"/>  How to build?
```
npm run build
```

## <img style="margin: auto;" src="https://skillicons.dev/icons?i=github&perline=3" alt=javascript width="50" height="50"/>  And the deployment? 

```
npm run deploy
//This command builds the app and deploys in github-page branch
```


## <img style="margin: auto;" src="https://skillicons.dev/icons?i=docker&perline=3" alt=javascript width="50" height="50"/> Docker!!!!

```
//With this command create the image 
  docker build --build-arg VITE_API_KEY=<your_api_key> -t <image_name> .
```

```
// hoist the sails in localhost:8080
  docker run -p 8080:80 <image_name>
```
## Nexts steps

- Apply the search by title, description, or content.
- Apply the filter and search for sources.
- Cached the calls.
