---
title: "Qu'est-ce que LaTeX et comment ça marche?"
---

Contrairement aux traitements de texte courants tels que Microsoft Word ou LibreOffice, LaTeX
ne fournit généralement pas WYSIWYG («Ce que vous voyez est ce que vous obtenez»). Avec LaTeX
on prend du texte et enrichit le texte avec du balisage. Ce balisage indique à LaTeX
sur la signification logique de certains éléments du texte, semblable à la façon
HTML le fait.

Prenons par exemple l'élément «<h2>» indiquant une nouvelle section dans un document HTML.
LaTeX a également une commande pour cela; ici, on utiliserait la commande `\ section`.

## Le workflow {{site.latex}}

Parce que les fichiers LaTeX ne sont pas le document lui-même mais plutôt des instructions
sur l'apparence du document, vous ne donnez normalement pas à d'autres personnes
votre fichier LaTeX lui-même. Au lieu de cela, après avoir écrit votre LaTeX _source_, vous
exécuter LaTeX sur le fichier (en utilisant normalement un programme appelé `pdflatex`) pour
créer un fichier PDF. Ce PDF est alors ce que vous envoyez aux autres.

Différentes personnes utilisent différentes manières de décrire ce processus. Comme en utilisant LaTeX
c'est un peu comme la programmation, on l'appelle souvent «compiler» votre document, même si
la «composition» est plus précise.

## Plusieurs {{site.latex}} exécutions

Pour les fichiers simples, vous n'avez besoin de composer votre fichier qu'une seule fois pour
PDF. Mais une fois que vous commencez à ajouter des choses plus compliquées, comme des références croisées,
citations, figures et tables des matières, vous devrez peut-être exécuter LaTeX plus
plus d'une fois. Nous vous dirons quand c'est le cas.

## {{site.latex}} ou pdf {{site.latex}} ou ...

Dans la [leçon suivante] (leçon 02), nous allons voir que LaTeX n'est pas un
programme unique. Pour garder les choses simples, nous allons nous concentrer sur un
Programme LaTeX, pdfLaTeX, pour créer vos PDF. Nous examinerons quelques autres
et pourquoi vous voudrez peut-être les utiliser plus tard dans le cours.
