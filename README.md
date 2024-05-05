![Texte alternatif](front/public/logo.png)
# Divine Delivery

## Description
Divine Delivery est bien plus qu'un simple service de livraison d'anges gardiens. C'est une plateforme révolutionnaire qui connecte les individus aux ressources célestes dont ils ont besoin pour surmonter les défis de la vie quotidienne. Grâce à une technologie de pointe de téléportation, Divine Delivery offre des interventions instantanées, permettant aux anges gardiens qualifiés d'être présents en un clin d'œil où qu'ils soient nécessaires.

Les services de Divine Delivery sont conçus pour répondre à une variété de besoins, qu'il s'agisse de situations d'urgence, de guérison émotionnelle, de conseils spirituels, de protection ou simplement d'une présence réconfortante. Les anges de Divine Delivery sont sélectionnés avec soin pour leur sagesse, leur compassion et leur capacité à offrir un soutien divin adapté à chaque situation.

En plus des interventions individuelles, Divine Delivery propose des espaces de discussion virtuels où les utilisateurs peuvent échanger avec d'autres personnes confrontées à des défis similaires, créant ainsi une communauté de soutien bienveillante et inspirante.

Avec Divine Delivery, chaque individu peut accéder à l'aide divine dont il a besoin, quand il en a besoin, offrant ainsi un nouveau niveau de confort, de guérison et d'inspiration dans la vie de tous les jours

## Technologies utilisées pour la création de notre site web
- React JS, Typescript JS, Vite JS, Sass, boostrap pour le côté client
- Node JS, mongoDB pour le côté serveur
- python, flask, tensorflow pour l' Intelligence Artificielle
  
## Prérequis pour lancer notre site web en local
- Node.js
- npm 

## Installation pour tester le site en local

1. Cloner le projet depuis GitHub :

   ```bash
   git clone https://github.com/KiritoEM/webcup-2024-Trimobe

3. Installer les packages de React TS et le lancer

    ```bash
      cd front
      npm install
      npm run dev

3. Installer les packages de node JS et le lancer

    ```bash
      cd backend
      npm install
      npm run dev
    
4. Pour utiliser React TS en local avec node JS

     dans /front/src/services/authServices.ts, remplacer es URL  "https://trimobe.madagascar.webcup.hodi.host/api/auth/register" et "https://trimobe.madagascar.webcup.hodi.host/api/auth/login"  par :
      ```bash
     http://localhost:3003/api/auth/register dans la fonction signup
     http://localhost:3003/api/auth/login dans la fonction login
    
