---
title: learnlatex.org
---

## Welcome to learnlatex.org (German)!

This site aims to help you take the first steps with LaTeX, a document
preparation system designed to produce high-quality typeset output. LaTeX can
be scary for new users as it is _not_ a word processor, and because it is not a
single program. Our aim here is to help you get started without trying to show
you _everything_ in one go.

To do that, we have taken around 15 of the most important things you'll need to
know, and made them into short 'lessons'. Each lesson is very focussed, so they
should not take too long to cover. In each lesson, we've given examples of what
you'd write, and they are available so you can try them out online.

We know that people will want to know more than we can cover in 15 short
lessons. To help guide you when you need more information, we have therefore
including a 'going further' page for each lesson. This extra information is
there to support you when you need the detail, but should not get in your
way if you do not.

## How the examples work

To support your learning, the site includes lots of examples. In
[Lesson 2](de/lesson-02) we will talk about how you use LaTeX both online and with
a local installation on your own PC. To get you started, we have set up
our examples so you can edit and run them _in the page_ they are on. We
have also linked them to [Overleaf](https://www.overleaf.com), one of the
most popular online LaTeX editing sites. But don't worry, you can also
use the examples on your own machine. You can read more about how to use the
examples [in the site help](de/help).

Our examples are based around using an up-to-date LaTeX installation. They
all work with both of our online demonstration systems, so if you get strange
errors, you might want to check if your LaTeX system is up-to-date.

## The lessons

<ul>
{%- for page in site.pages | sort: 'path' -%}
{%- if page.path  contains "de/lesson" %}
<li><a href="{{page.path | replace: '.md','' | replace: 'de/',''}}">
<b>
{% if page.path contains "de/lesson-0" %}
&#160;{{page.path | replace: '.md','' | replace: 'de/lesson-0',''}}
{% else %}
{{page.path | replace: '.md','' | replace: 'de/lesson-',''}}
{% endif %}
</b>
&mdash; {{page.title}}</a></li>
{%- endif -%}
{%- endfor -%}
</ul>

### Additional lessons specific to learnlatex.org/de

<ul>
{%- for page in site.pages | sort: 'path' -%}
{%- if page.path  contains "de/language" %}
<li><a href="{{page.path | replace: '.md','' | replace: 'de/', ''}}">
<b>
{% if page.path contains "de/language-0" %}
&#160;{{page.path | replace: '.md','' | replace: 'de/language-0',''}}
{% else %}
{{page.path | replace: '.md','' | replace: 'de/language-',''}}
{% endif %}
</b>
&mdash; {{page.title}}</a></li>
{%- endif -%}
{%- endfor -%}
</ul>

## Going further

The focussed lessons here are not meant to cover everything you'll ever need to
know about LaTeX; we want to give you enough to get started and to _understand_
examples and advice elsewhere. We cover getting more information in [the last
lesson](de/lesson-15), but it's worth saying now that getting access to a book
about LaTeX is still the  best way to learn the detail. We've given some
recommendations in the last lesson.