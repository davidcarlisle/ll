---
title: "Citations et références"
---
<script>
comprend = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

## Bases de données de référence

Pour les citations bibliographiques, vous pouvez inclure des sources de référence directement dans
votre document, vous obtiendrez généralement ces informations d'un ou de plusieurs
des dossiers. Un tel fichier est une base de données de références, contenant les informations dans un
format convivial. L'utilisation d'une ou plusieurs bases de données de référence vous permet
réutilisez les informations et évitez le formatage manuel.

Les bases de données de référence sont normalement appelées «fichiers BibTeX» et ont
extension `.bib`. Ils contiennent une ou plusieurs entrées, une pour chaque référence, et
dans chaque entrée, il y a une série de champs. Regardons un exemple
.

<! - {% raw%} ->
```
@Article {Thomas2008,
  auteur = {Thomas, Christine M. et Liu, Tianbiao et Hall, Michael B.
               et Darensbourg, Marcetta Y.},
  title = {Série de complexes mixtes Valent {Fe (II) Fe (I)} qui modélisent le
              {H (OX)} État de [{FeFe}] hydrogénase: propriétés redox,
              Investigation de la théorie de la densité fonctionnelle et réactivité avec
              Extrinsèque {CO}},
  journal = {Inorg. Chem.},
  année = {2008},
  volume = {47},
  nombre = {15},
  pages = {7009--7024},
  doi = {10.1021 / ic800654a},
}

@Book {Graham1995,
  auteur = {Ronald L. Graham et Donald E. Knuth et Oren Patashnik},
  title = {Mathématiques concrètes},
  éditeur = {Addison-Wesley},
  année = {1995}
}
```
<! - {% endraw%} ->

Ceci est une entrée pour un article et un livre; ce sont de loin les plus courants
les types. Chaque type d'entrée de base de données commence par «@», comme indiqué, et tous les
l'information se trouve alors dans une paire d'accolades.

Les différents champs dont nous avons besoin sont donnés sous forme de valeur-clé, en dehors de ce qui est
connu comme la «clé»: le «nom» de la citation. Vous pouvez utiliser ce que vous voulez,
car c'est juste une étiquette, mais ci-dessus, nous avons choisi d'utiliser le nom d'un auteur plus
l'année: c'est une approche courante.

Le champ exact que vous devez donner dépend du type d’entrée, mais la plupart des
ce sont assez évidents. Vous remarquerez peut-être que dans le champ `author`, chaque entrée
est séparé par `et`. C'est _essentiel_: le format de la _sortie_ doit être
savoir quel auteur est lequel. Vous remarquerez peut-être également que dans le titre de l'article,
certaines entrées sont dans un jeu supplémentaire d'accolades; ce sont là pour empêcher tout
changement de cas appliqué.

La modification manuelle des fichiers `.bib` est assez fastidieuse, donc la plupart des gens utilisent un
éditeur. [JabRef] (https://www.jabref.org) est largement utilisé et multiplateforme,
mais il existe plusieurs autres interfaces disponibles. Ici, nous allons utiliser le court
exemple de base de données ci-dessus pour nos démonstrations; nous l'avons «sauvegardé» sous
`learnlatex.bib`.

## Transfert d'informations depuis la base de données

Pour obtenir les informations dans votre document, il y a trois étapes.
Tout d'abord, utilisez LaTeX pour compiler votre document, ce qui crée un fichier avec un
liste des références citées par votre document. Deuxièmement, exécutez un
programme qui prend des informations de la base de données de références, de choix
sur ceux que vous utilisez et les met en ordre. Enfin, compilez
votre document à nouveau afin que LaTeX puisse utiliser ces informations pour résoudre
vos citations. Habituellement, il faudra au moins deux compilations pour
résoudre toutes les références.

Pour la deuxième étape, il existe deux systèmes largement utilisés: BibTeX et
Biber. Biber n'est utilisé qu'avec un package LaTeX appelé «biblatex», alors que
BibTeX est utilisé sans aucun paquet ou avec `natbib`.

L'exécution d'un deuxième outil ainsi que de LaTeX est gérée de différentes manières par différents
éditeurs. Pour nos exemples en ligne, il existe des scripts «en coulisses»
qui font tout d'un coup; c'est vrai pour LaTeX-Online et Overleaf. Votre
l'éditeur peut avoir un seul bouton "faire des choses" ou vous devrez peut-être choisir d'exécuter
BibTeX ou Biber manuellement entre les exécutions de LaTeX.

Le format des citations et références est indépendant de votre base de données BibTeX,
et est défini par ce qu'on appelle un «style». Nous verrons que ceux-ci fonctionnent légèrement
différemment dans `natbib` et` biblatex`, mais l'idée générale demeure: on peut
choisissez comment les citations apparaissent.

## Le workflow `natbib`

S'il est possible d'insérer des citations dans un document LaTeX sans
tous les paquets chargés, c'est assez limité. Au lieu de cela, nous utiliserons le
package `natbib`, qui nous permet de créer différents types de citation et
a beaucoup de styles disponibles.

La structure de base de notre entrée est comme indiqué dans cet exemple.

```latex
\ documentclass {article}
\ usepackage {natbib}

\ begin {document}
La vitrine mathématique vient de \ cite {Graham1995}, alors que
il y a de la chimie dans \ cite {Thomas2008}.

Quelques citations plus complexes: \ citep {Graham1995}, \ citet {Thomas2008}.

\ bibliographystyle {plainnat}
\ bibliographie {learnlatex}
\ end {document}
```

Vous pouvez voir que nous pouvons «\ citer» différentes entrées dans la base de données en donnant leur
clé. Le paquet `natbib` propose des styles de citation textuels et entre parenthèses,
`\ citet` et` \ citep`, respectivement. Le style de référence est sélectionné par le
ligne `\ bibliographystyle`; ici, nous avons utilisé le style «plainnat». le
la bibliographie est en fait insérée par la ligne `\ bibliography`, qui sélectionne également
la ou les bases de données à utiliser; il s'agit d'une liste de noms séparés par des virgules.

La configuration ci-dessus utilise le style auteur-année, mais nous pouvons utiliser le numérique
citations. Cela se fait en ajoutant l'option `nombres` à la ligne` natbib`.

## Le workflow `biblatex`

Le paquet `biblatex` fonctionne légèrement différemment de` natbib`, car nous sélectionnons
les bases de données dans le préambule mais l'imprimer dans le corps du document. Il y a
quelques nouvelles commandes pour cela.

```latex
\ documentclass {article}
\ usepackage [style = authoryear] {biblatex}
\ addbibresource {learnlatex.bib}% fichier d'informations de référence

\ begin {document}
La vitrine mathématique vient de \ cite {Graham1995}.

Quelques citations plus complexes: \ citeauthor {Thomas2008},
\ citetitle {Graham1995}, \ parencite {Thomas2008}.

\ printbibliography
\ end {document}
```

Notez que `\ addbibresource` _requiert_ le nom de fichier complet de la base de données, tandis que
nous avons omis le `.bib` pour` \ bibliography` avec `natbib`. Notez également que
`biblatex` utilise des noms plutôt longs pour ses commandes de citation, mais ce sont
tous assez faciles à deviner.

Dans `biblatex`, le style de référence est choisi lors du chargement du package. Ici,
nous avons utilisé `authoryear`, mais il y a un style` numeric` et beaucoup d'autres sont
aussi disponible.

## Des exercices

Essayez les exemples `natbib` et` biblatex`. Pour `natbib`, vous aurez besoin
pour exécuter LaTeX, BibTeX, LaTeX, LaTeX; pour `biblatex`, c'est LaTeX, Biber, LaTeX.
Découvrez comment le faire dans votre éditeur, ou essayez Overleaf et LaTeX-Online
automatisation.

Découvrez ce qui se passe lorsque vous créez de nouvelles entrées de base de données et de nouvelles citations. Ajouter
une citation qui n'est pas dans la base de données et voyez comment elle apparaît. Expérience
avec l'option `numeric` pour les deux packages.

