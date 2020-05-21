---
titre: learnlatex.org
---

## Bienvenue sur learnlatex.org!

Ce site a pour but de vous aider à faire les premiers pas avec LaTeX, un document
système de préparation conçu pour produire une sortie de composition de haute qualité. LaTeX peut
faire peur aux nouveaux utilisateurs car ce n'est pas un traitement de texte, et parce que ce n'est pas un
programme unique. Notre objectif ici est de vous aider à démarrer sans essayer de montrer
vous _tout_ en une seule fois.

Pour ce faire, nous avons pris environ 15 des choses les plus importantes dont vous aurez besoin pour
savoir, et en a fait de courtes «leçons». Chaque leçon est très ciblée, donc ils
ne devrait pas prendre trop de temps à couvrir. Dans chaque leçon, nous avons donné des exemples de ce
vous écririez, et ils sont disponibles pour que vous puissiez les essayer en ligne.

Nous savons que les gens voudront en savoir plus que ce que nous pouvons couvrir en 15 courts
cours. Pour vous guider lorsque vous avez besoin de plus d'informations, nous avons donc
y compris une page «aller plus loin» pour chaque leçon. Ces informations supplémentaires sont
là pour vous aider lorsque vous avez besoin des détails, mais ne devrait pas entrer dans votre
façon si vous ne le faites pas.

## Fonctionnement des exemples

Pour soutenir votre apprentissage, le site comprend de nombreux exemples. Dans
[Leçon 2](fr/lesson-02) nous parlerons de la façon dont vous utilisez LaTeX à la fois en ligne et avec
une installation locale sur votre propre PC. Pour vous lancer, nous avons mis en place
nos exemples pour que vous puissiez les modifier et les exécuter _dans la page_ sur laquelle ils se trouvent. nous
les ont également liés à [Overleaf](https://www.overleaf.com), l'un des
les sites d'édition en ligne LaTeX les plus populaires. Mais ne vous inquiétez pas, vous pouvez aussi
utilisez les exemples sur votre propre machine. Vous pouvez en savoir plus sur l'utilisation du
exemples [dans l'aide du site](fr/help).

Nos exemples sont basés sur l'utilisation d'une installation LaTeX à jour. Ils
tous fonctionnent avec nos deux systèmes de démonstration en ligne, donc si vous devenez étrange
erreurs, vous voudrez peut-être vérifier si votre système LaTeX est à jour.

## Les cours

<ul>
{%- for page in site.pages | sort: 'path' -%}
{%- if page.path  contains "fr/lesson" %}
<li><a href="{{page.path | replace: '.md','' | replace: 'fr/',''}}">
<b>
{% if page.path contains "fr/lesson-0" %}
&#160;{{page.path | replace: '.md','' | replace: 'fr/lesson-0',''}}
{% else %}
{{page.path | replace: '.md','' | replace: 'fr/lesson-',''}}
{% endif %}
</b>
&mdash; {{page.title}}</a></li>
{%- endif -%}
{%- endfor -%}
</ul>

### Leçons supplémentaires spécifiques à learnlatex.org/fr

<ul>
{%- for page in site.pages | sort: 'path' -%}
{%- if page.path  contains "fr/language" %}
<li><a href="{{page.path | replace: '.md','' | replace: 'fr/', ''}}">
<b>
{% if page.path contains "en/language-0" %}
&#160;{{page.path | replace: '.md','' | replace: 'fr/language-0',''}}
{% else %}
{{page.path | replace: '.md','' | replace: 'fr/language-',''}}
{% endif %}
</b>
&mdash; {{page.title}}</a></li>
{%- endif -%}
{%- endfor -%}
</ul>


## Aller plus loin

Les leçons ciblées ici ne visent pas à couvrir tout ce dont vous aurez besoin pour
connaître LaTeX; nous voulons vous donner assez pour commencer et pour _comprendre_
exemples et conseils ailleurs. Nous couvrons obtenir plus d'informations dans [le dernier
leçon](fr/lesson-15), mais il vaut la peine de dire maintenant que l'accès à un livre
à propos de LaTeX est toujours le meilleur moyen d'apprendre les détails. Nous en avons donné
recommandations de la dernière leçon.
