
# Picky

Picky est un moteur de recherche pour satisfaire ses envies de films ou séries, que l'on veuille binge-watcher un programme particulier ou tout simplement avoir des idées pour sa soirée.


## Stack Technique

**Client:** React, Redux, Material UI

**Server:** Node, Express, Sqitch, PostgreSQL, Joi, JWT, Bcrypt, Swagger 

**Third Party API:** Betaseries 
## Fonctionnalités V1

- Picky Find : moteur de recherche pour savoir sur quelle plate-forme est présent un programme
- Picky Mood : questionnaire intéractif basé sur le type (séries ou films), les émotions (ébahi.e, transporté.e, etc.) et les abonnements (netflix, salto, canal+ etc.)
- Picky Details : ouverture d'une modale pour avoir accès aux détails d'un programme
- Picky Wish : ajouter/supprimer des programmes à sa watchlist
- Picky Lucky : propositions random de programmes à regarder
- Light/dark mode
- Inscription / Connexion / Suppression de compte

## Fonctionnalités à venir

- possibilité de renseigner les abonnements dès l'inscription
- étoffer Picky Mood avec des questions supplémentaires
- synchroniser les abonnements avec la watchlist d'un user
- avoir accès aux profils d'autres personnes
- affiner les résultats de recherche 
  
## Run Locally

Clonez le projet

```bash
  git clone https://github.com/ghsdl/picky
```

Allez dans le directory du projet

```bash
  cd picky
```

Installez la base de données PostgreSQL

```bash
createdb picky
```

Installez les dépendances back

```bash
  npm install
```

Installez les dépendances front

```bash
  cd front
  npm install
```

Démarrez le serveur back

```bash
  npm run dev
```

Démarrez le serveur front

```bash
  npm start
```

  