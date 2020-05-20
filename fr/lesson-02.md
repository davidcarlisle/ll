---
title: "Travailler avec LaTeX"
---

Contrairement à de nombreux programmes informatiques, LaTeX n'est pas une seule application contenant
«tout» en un. Au lieu de cela, il existe des programmes distincts qui fonctionnent ensemble.
Nous pouvons les diviser en deux choses dont vous avez réellement besoin:

- Un _TeX system_
- Un éditeur spécifique à LaTeX

## {{site.tex}} systèmes

Le cœur du travail avec LaTeX est d'avoir un système TeX disponible. Un système TeX est un ensemble
des programmes et des fichiers «en coulisses» qui sont nécessaires pour faire fonctionner LaTeX, mais
la plupart du temps, vous ne «lancez» pas cela directement.

Il existe deux principaux systèmes TeX disponibles aujourd'hui,
[MiKTeX] (https://www.miktex.org) et [TeX Live] (https://tug.org/texlive). Tous les deux
sont disponibles pour Windows, macOS et Linux.
MiKTeX possède une solide expérience sous Windows;
sur macOS, TeX Live est intégré dans une plus grande collection appelée [MacTeX] (http://www.tug.org/mactex/).
Il y a [avantages pour chacun
système] (https://tex.stackexchange.com/questions/20036), et vous voudrez peut-être
regardez [quelques conseils supplémentaires de LaTeX
Projet] (https://www.latex-project.org/get/).

Comme TeX Live est disponible sur toutes les plateformes courantes, et comme il a des performances
avantages, nous recommandons que si vous ne savez pas quel système installer, vous
choisissez TeX Live.

## Rédacteurs

Les fichiers LaTeX sont simplement du texte brut, ils peuvent donc être modifiés avec n'importe quel éditeur de texte.
Cependant, il est plus pratique d'avoir un éditeur conçu pour fonctionner avec
LaTeX, car ils fournissent des fonctionnalités telles que la compilation en un clic de vos fichiers,
visionneuses PDF intégrées et mise en évidence de la syntaxe. Une fonctionnalité vraiment utile dans tous
les éditeurs LaTeX modernes sont SyncTeX: la possibilité de cliquer sur votre source et d'aller
directement dans votre PDF, ou inversement.

Il y a beaucoup plus d’éditeurs LaTeX que ce que nous pouvons espérer énumérer ici: il
[liste complète sur
StackExchange] (https://tex.stackexchange.com/questions/339/latex-editors-ides).
Un éditeur de base, [TeXworks] (https://tug.org/texworks), est inclus dans TeX Live
et MiKTeX sur Windows et Linux, et [TeXShop] (https://pages.uoregon.edu/koch/texshop/)
est inclus dans MacTeX.

Quel que soit l'éditeur que vous choisissez, nous vous recommandons de l'installer _après_ votre système TeX,
afin que l'éditeur puisse «trouver» le système TeX et se configurer correctement.

## Travailler en ligne

Il existe de nos jours plusieurs sites en ligne puissants qui vous permettent d'éviter
la nécessité d'installer un système TeX et un éditeur LaTeX. Ces sites Web
travailler en vous permettant de modifier vos fichiers dans la page Web, puis ils exécutent LaTeX
dans les coulisses et affichez le PDF produit.

Certains de ces sites combinent LaTeX avec des fonctionnalités similaires à un traitement de texte,
tandis que d'autres sont plus axés sur vous permettant de voir le code LaTeX et
sont donc plus proches d'avoir une installation locale.

Il existe des systèmes qui vous permettent d'exécuter LaTeX sans avoir besoin d'être connecté, et nous
utilisez l'un d'entre eux, [LaTeX.Online] (https://latexonline.cc), pour vous permettre
éditez et testez les exemples que nous donnons. Pour un travail plus complet, le meilleur en ligne
les systèmes nécessitent que vous vous inscriviez avant de les utiliser. Cela vous permet de sauvegarder votre
fonctionne mais aide également les sites à ne pas être surchargés. Nous avons mis en place des liens pour que vous
pouvez modifier nos exemples à l'aide de [Overleaf] (https://www.overleaf.com), l'un des
principaux sites Web pour LaTeX en ligne. Il y en a bien sûr d'autres:
[Papeeria] (https://papeeria.com/) en est un exemple.

## Exercice

Installez-vous avec une installation LaTeX locale _ou_ un compte avec
un service en ligne LaTeX. Si vous utilisez une installation locale, vous aurez besoin
pour choisir un éditeur aussi: nous vous recommandons de commencer avec TeXworks ou TeX Shop
(voir ci-dessus), puis en regardant d'autres éditeurs plus tard une fois que vous saurez comment _vous_
fonctionne mieux avec LaTeX.

Vous pourrez [exécuter tous nos autres exercices dans votre navigateur] (aide), mais nous voulons
pour vous aider à travailler avec de vrais documents, c'est donc le moment idéal pour
vous prêt.
