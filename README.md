# gta-ynov-vue

> A Vue.js project

## Description
Création d'une application de gestion des temps pour une entreprise.

## Gestion du projet
(souhaité)
- gestion de contrats (calcule des temps de travail,...)
- visualisation des contrats et demandes à partir d'un calendrier
- modification du profil utilisateur (employé)

(réalisé)
- création d'une API (back)
- système de login (selon les roles)
- visualisation du profil utilisateur
- visualisation des dashboards (employé et responsable équipe)
- création d'utilisateur (pour le responsable d'équipe)
- création de "demande employé" (congé, récupération, ...)
- visualisation des "demandes employé" (pour l'employé en question)
- visualisation des "demandes employé" (pour le responsable d'équipe)
- validation des "demandes employé" pour les employés de son équipe
- visualisation de son équipe (pour le responable d'équipe)

## Lien vers l'hebergement
- lien back : https://gta-ynov-server.herokuapp.com/
- lien front : https://gta-ynov-vue-app.herokuapp.com/

```
login : employe1@gmail.com
mdp : azerty
role : employe
-------------------------
login : director1@gmail.com
mdp : azerty
role : director
-------------------------
login : hr1@gmail.com
mdp : azerty
role : HR
```

## Local Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# serve for production at localhost:5000
npm start
```
