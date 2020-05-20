---
title: "Utilisation du site learnlatex.org"
---

## Navigation sur le site

Le cours se compose de 15 leçons de base accessibles à partir de la table des matières sur la [page d'accueil] (/).

Chaque leçon a un lien vers une leçon associée sur le même sujet
qui va plus en profondeur. Il devrait être possible de travailler
les 15 leçons _sans_ lire les leçons supplémentaires.

## Exécution des exemples

Chaque exemple consiste en un petit document LaTeX complet montré dans
la page comme celle-ci:

```latex
\ documentclass {article}
\ begin {document}
Exemple de texte.
\ end {document}
```

L'exemple est complet mais vous pouvez le modifier pour faire de petites
changements, peut-être dans le cadre d'un ensemble d'exercices à la fin de la leçon.

Le bouton <button style = "padding: 0 1px; font-size: 90%"> Modifier </button> permet de modifier la page, c'est-à-dire
marqué par la suppression de la coloration syntaxique LaTeX et un vert
bordure ajoutée autour du bloc de code. Notez que ce n'est qu'une fonction d'édition de base fournie par votre navigateur;
il n'y a pas d'aide d'édition spécifique à TeX comme dans les systèmes d'édition typiques que vous utiliseriez avec TeX.

Que le bloc de code ait été modifié ou non, il existe trois méthodes de base pour exécuter l'exemple.

1. Utilisez le service ** LaTeX Online **. Le bouton <button style = "padding: 0 1px; font-size: 90%"> LaTeX online </button>
   soumettra le code au service [latexonline.cc] (https://latexonline.cc/).

   Le document PDF résultant (ou une section du journal des erreurs) sera
   montré en ligne juste en dessous de l'exemple. Un <button style = "padding: 0 1px; font-size: 90%"> Delete
   Le bouton Sortie </button> sera fourni afin que vous puissiez supprimer cette sortie
   (ou vous pouvez le laisser en place et continuer le reste de la leçon
   au dessous de).

   Notez que ** LaTeX Online ** ne nécessite aucune connexion ni inscription d'aucune sorte
   il est donc très pratique pour de petits exemples, mais ni ce site
   ni le site `latexonline.cc` ne fournit de mécanisme pour sauvegarder votre
   document. Toutes les modifications que vous apportez à l'exemple sont perdues si vous
   sortir de la page.

   ** Avertissement: ** L'affichage du résultat PDF dans la page nécessite que votre
     le navigateur a une visionneuse PDF intégrée qui peut fonctionner dans un «iframe».
     Dans les navigateurs mobiles où ce n'est souvent pas le cas, il peut vous être proposé un
     dialogue pour télécharger le résultat en tant que `compile.pdf` que vous pouvez ensuite
     afficher dans votre application de lecture PDF, ou il peut ne pas fonctionner du tout.
     Le comportement exact dépend des détails du navigateur et du système d'exploitation mobile
     réglages. Vous pouvez préférer utiliser le lien ** Overleaf ** dans certains cas.
     

2. Utilisez le service ** Overleaf **. <Button style = "padding: 0 1px; font-size: 90%"> Ouvrir dans Overleaf </button>
   Le bouton soumettra le code à [Overleaf] (https://www.overleaf.com/about).

   Si vous n'avez pas de compte ou que les détails du compte ne sont pas
   déjà mis en cache dans votre navigateur, vous serez redirigé vers un
   page de connexion où vous pouvez vous connecter ou vous inscrire avec Overleaf. C'est un
   service gratuit mais vous oblige à donner quelques détails et à accepter
   Termes et conditions.

   Si votre compte Overleaf est déjà mis en cache dans votre navigateur, alors
   Overleaf sera ouvert dans un nouvel onglet, avec un nouveau
   projet avec le code. Vous pouvez ensuite le modifier dans
   Overleaf qui exécutera simultanément LaTeX sur votre code montrant
   la sortie résultante ou le journal des erreurs.

   Les fonctionnalités d'édition d'Overleaf sont bien plus étendues que sur ce
   et vous pouvez enregistrer votre projet dans votre compte Overleaf et
   y revenir plus tard.

3. Si vous avez un système TeX installé localement, vous pouvez copier le
   exemple de code hors de la page, soit en le sélectionnant explicitement, soit en
   en utilisant le <button style = "padding: 0 1px; font-size: 90%"> Copy </button>
   bouton. Cela placera le code dans votre système d'exploitation
   presse-papiers afin que vous puissiez commencer un document vierge en utilisant votre local
   éditeur et collez le texte.


## Choisir le moteur {{site.tex}}

Lors de la soumission de projets à Overleaf ou LaTeX Online, par défaut, le
Le moteur `pdflatex` sera utilisé sauf si l'exemple utilise le` fontspec`
paquet auquel cas «xelatex» est utilisé.

Vous pouvez forcer le choix de `pdflatex`,` xelatex` ou `lualatex` en utilisant un commentaire du formulaire:

`%! TEX` _any text_ `lualatex`

où l'espace blanc au début est facultatif et le cas est ignoré comme
est un texte entre le premier et le dernier mot.

Cela autorise la forme `%! TEX program = pdflatex` utilisée par certains éditeurs TeX
mais ne nécessite pas le `programme =` et est actuellement limité à
en spécifiant un seul des trois moteurs pris en charge sur les deux
les systèmes en ligne utilisés.

Vous pouvez voir un exemple de commentaire utilisé pour spécifier LuaLaTeX dans
[quelques exemples sur ce site] (suite-14).



   

