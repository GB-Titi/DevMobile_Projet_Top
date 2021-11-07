# Rocket Leaste

## Description du projet 

L'objectif de ce projet est de crée une application PWA avec cordova sur laquelle on peut crée des listes de top. On peut dans ces tops créer 5 éléments qui seront stockés dans le local storage et affiché si besoin.

Sur la page d'accueil on arrive sur une simple vidéo et la possiblité de lancer de la musique. Cette gestion de musique se retrouve dans le menu gauche afin de permettre sa gestion dans n'importe quelle page de l'application.

Le menu de gauche permet de lister les liste déjà crées (deux sont là de base : la liste octane et la liste hybrides). Mais également de crée une nouvelle liste avec le boutton prévu à cet effet.

***L'image rocket league dans le menu permet de retourner à l'accueil***

***Rocket Leaste*** est mon application pour le `Module developpement mobile d'Ynov` visant à crée une PWA de création de top.

## Fonctionnalitées utilisées

### De base (hitbox.js / primary_hitbox.js)
> -Local storage utilisé : Lors du lancement de l'application on vérifie que les listes de base sont crées, auquel cas on le fait en les mettant dans le local storage. On regarde ensuite le contenu de "liste" dans le local storage et on créer les éléments clicables en fonction (listing des listes). Lors du clic sur une liste on va récupérer son contenu dans le local storage et l'afficher.
> -La gestion de l'affichage est faite avec des display:none ou flex directement dans les fonctions.
> -On met la page offline en cache avec tout ce qui lui est relative (logos, images etc...)
> -La video de l'accueil contient des propriétées lui permettant de se lancer en boucle et sans le son.

### Cordova (native.js)
> -Gestion de l'audio : On gère un son récupéré dans le dossier média en liant les fonctions (play, stop...) aux boutons relatifs à cet effet dès que l'application charge. 
> -Le check des batteries est effectué, si la batterie change : console.log
> -openInAppBrowser (dans le code = openInaudioBrowserOptions car un ctrl + F où j'ai remplacé tout les "app" par "audio") : tout les liens sont ouverts dans le device et non en externe. (liens sur les bouttons du menu haut cordova et pwa)
> -Vibrations : histoire de l'utiliser mais pas possible a tester sur desktop. Lorsqu'on valide notre formulaire c'est censé faire vibrer l'écran et mettre un message dans la console
> -Modal 
> -Offline
