---
title: "Votre premier document LaTeX"
---

Notre premier document LaTeX va être très simple: l'idée est de vous montrer
à quoi ressemble un document et comment le composer avec succès. C'est aussi votre
première chance de [voir comment utiliser les exemples ici sur `learnlatex.org`] (aide).

Si vous utilisez une installation LaTeX locale, créez dans votre éditeur un nouveau fichier
appelé `first.tex`, et copiez-collez le texte ci-dessous ou saisissez-le.
Si vous utilisez le système en ligne, vous pouvez simplement cliquer sur les boutons
exemple pour l'essayer! Nous vous suggérons d'essayer les options en ligne même si vous
avoir installé LaTeX localement; c'est une bonne occasion de voir comment les différents
les options fonctionnent.
```latex
\ documentclass {article}

\ begin {document}
Salut le monde!

Ceci est un premier document.
\ end {document}
```

Enregistrez le fichier et composez-le dans un document PDF; si vous utilisez un LaTeX local
l'installation, le bouton exact à appuyer dépendra de l'éditeur que vous avez
choisi. Vous devriez obtenir un fichier PDF contenant le texte au-dessus de _plus_ une page
nombre; LaTeX ajoute cela automatiquement.

Visualisez la sortie `first.pdf` avec
quel que soit le programme que vous préférez pour l'affichage PDF.
A l'air bien; toutes nos félicitations!

## Gestion des erreurs

Des erreurs se produisent.
Vérifiez que vous avez entré chaque ligne dans le fichier texte exactement comme écrit ci-dessus.
Parfois, des changements d’entrée apparemment minimes entraînent de
résultat, y compris le fait de ne pas fonctionner un document.
Si vous êtes bloqué, essayez d'effacer le document et de le copier à
lignes ci-dessus.

Si votre exécution de composition LaTeX se termine par un point d'interrogation, vous pouvez
en tapant «x» et «<Entrée>».

Les messages d'erreur de LaTeX tentent d'être utiles, mais ils ne sont pas identiques aux messages
dans les traitements de texte. Certains éditeurs ont également du mal à voir le texte «complet»
erreur, qui peut masquer les détails clés. LaTeX crée toujours un journal de ce que c'est
Faire; il s'agit d'un fichier texte se terminant par `.log`. Vous pouvez toujours voir l'erreur complète
messages là-bas, et si vous avez un problème, les utilisateurs experts de LaTeX demanderont souvent un
copie de votre fichier journal.

## Ce que vous avez

Le premier document montre les bases.
Les documents LaTeX sont un mélange de texte et de commandes.
Les commandes commencent par une barre oblique inverse
et ont parfois des arguments entre accolades
(ou parfois des arguments facultatifs entre crochets).
Ensuite, vous obtenez un PDF de sortie en disant à LaTeX de composer votre fichier.

Chaque document LaTeX a un `\ begin {document}` et un correspondant
`\ end {document}`.
Entre ces deux se trouve le * corps du document *, où va votre contenu.
Ici, le corps a deux paragraphes (dans LaTeX vous séparez les paragraphes
avec une ligne vierge).
Avant `\ begin {document}` est le * préambule du document *,
qui a du code pour configurer la mise en page du document.

LaTeX a d'autres paires `\ begin {...}` et `\ end {...}`; ceux-ci sont
appelés * environnements *.
Vous devez les faire correspondre, de sorte que pour chaque `\ begin {x}` il y ait un `\ end {x}`.
Vous devez également les imbriquer, de sorte que si vous avez
`\ begin {x} ... \ begin {y}` alors vous devez avoir
`\ end {y} ... \ end {x}`.

Nous pouvons ajouter des commentaires à un fichier LaTeX en les commençant par `%`; utilisons
que pour montrer la structure:
```latex
\ documentclass [a4paper, 12pt] {article}% La classe de document avec des options
% Un commentaire dans le préambule
\ begin {document}
% Ceci est un commentaire
C'est simple
document \ footnote {avec une note de bas de page}.

Ceci est un nouveau paragraphe.
\ end {document}
```

Vous pouvez voir ci-dessus que nous avons deux paragraphes: notez l'utilisation d'une ligne vierge
pour faire ça. Notez également que plusieurs espaces sont traités comme un seul espace.

Vous pouvez aussi parfois vouloir un espace «dur» qui ne se casse pas sur les lignes: dans
LaTeX nous pouvons créer cela en utilisant «~», en «liant» deux morceaux de texte ensemble. C'est
particulièrement utile lorsque nous commençons à créer des références croisées plus tard dans le cours.

## Caractères spéciaux

Vous avez probablement remarqué que `` \ ``, `{` et `}` ont une signification particulière pour LaTeX.
Un `` \ '' démarre une instruction pour LaTeX: une 'commande'. Les personnages accolades
 `{` et `}` sont utilisés pour afficher les arguments obligatoires: les informations qui commandent
 exiger.

Il y a quelques autres caractères avec une signification spéciale; nous venons de voir que `~`
est un espace «dur», par exemple. Presque tous ces personnages sont _très_
rare dans le texte normal, c'est pourquoi ils ont été choisis pour des significations spéciales.
Si vous devez montrer l'un de ces caractères spéciaux, nous avons mis
[informations dans la page des détails] (more-03).

## Exercice

Expérimentez avec le système d'édition et de composition en ligne; clique le
pour composer le contenu, puis modifiez-le dans la page Web et retapez-le.

Essayez d'ajouter du texte à votre premier document, de composer et de voir les changements dans
votre PDF. Créez des paragraphes différents et ajoutez des espaces variables. Découvrez comment
votre éditeur travaille; cliquez sur votre source et découvrez comment aller sur la même ligne
votre PDF. Essayez d'ajouter des espaces difficiles et voyez comment ils influencent les sauts de ligne.
