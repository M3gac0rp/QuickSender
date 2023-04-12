# QuickSender

Script d'envoi de proposition de développement personnalisé
Ce script permet d'envoyer un email personnalisé à une liste d'adresses email contenue dans un fichier texte. Le but est de proposer les services d'un développeur de scripts freelance pour automatiser des tâches répétitives pour les entreprises.

Installation
Clonez le repo : git clone https://github.com/votre-nom/proposition-dev-personnalise.git
Installez les dépendances : npm install
Utilisation
Remplacez les informations de connexion du transporteur d'email et les options de messagerie dans le fichier index.js.
Spécifiez le chemin absolu du fichier contenant la liste d'adresses email dans le fichier index.js.
Personnalisez le texte de l'email dans le fichier index.js.
Exécutez le script : npm start.
Le script enverra un email personnalisé à chaque adresse email de la liste en respectant un délai de 20 secondes entre chaque envoi.
