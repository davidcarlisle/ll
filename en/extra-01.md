---
title: "Examples for further study"
---

This course has given an overview of the core features of LaTeX.
LaTeX has vast array of extension packages and is used in many subject
areas.  We give here some examples, with no explanation here but links
to the package documentation at [texdoc.net](https://texdoc.net).
The examples are taken from the package documentation unless otherwise noted.

**Note** that inclusion here is not intended as an endorsement of the
  package over other similar packages, we just aim for a small sample
  showing a range of areas not otherwise covered in this course.

## Chemistry

### [`mhchem`](https://texdoc.net/pkg/mhchem)

```latex
\documentclass{article}
\usepackage{mhchem}
\begin{document}
\ce{Hg^2+ ->[I-] HgI2 -> [I-] [Hg^{II}I4]^2-}
\end{document}
```

## Linguistics
### [`forest`](https://texdoc.net/pkg/forest)
```latex
\documentclass{article}
\usepackage{mhchem}
\begin{document}
\begin{forest}
[VP
  [DP[John]]
  [V’
    [V[sent]]
    [DP[Mary]]
    [DP[D[a]][NP[letter]]]
  ]
]
\end{forest}
\end{document}
```

## Chess

### [`xskak`](https://texdoc.net/pkg/xskak)
```latex
\documentclass{article}
\usepackage{xskak}
\begin{document}
newchessgame
\mainline{1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6}

\xskakset{moveid=2w}%
\chessboard[setfen=\xskakget{nextfen}]\\[1ex]
Position after 2.\,\xskakget{lan}
\end{document}
```


## Poetry

### [`memoir`](https://texdoc.net/pkg/memoir)


```latex
\documentclass{memoir}
\begin{document}
\settowidth{\versewidth}{Nay, nay, I leave thee not,
                                       thou goest too}
\begin{verse}[\versewidth]
\ldots \\*
His judgement rendered, he dissolved the Thing. \\*
\flagverse{Ingeborg} And your decision? \\*
\flagverse{Fridthjof} \vinphantom{And your decision?}

                                   Have I ought to choose? \\*
Is not mine honour bound by his decree? \\*
And that I will redeem through Angantyr \\*
His paltry gold doth hide in Nastrand’s flood. \\*
Today will I depart. \\*
\flagverse{Ingeborg} \vinphantom{Today will I depart.}

                                 And Ingeborg leave? \\*
\flagverse{Fridthjof} Nay, nay, I leave thee not,

                                   thou goest too. \\*
\flagverse{Ingeborg} Impossible! \\*
\flagverse{Fridthjof} \vinphantom{Impossible!}

                                   O! hear me, ere thou answerest.
\end{verse}
\end{document}
```

### Drawing
### [`tikz`](https://texdoc.net/pkg/tikz)



<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{tikz}
\usetikzlibrary {perspective}

\begin{document}


\newcommand\simplecuboid[3]{%
\fill[gray!80!white] (tpp cs:x=0,y=0,z=#3)
-- (tpp cs:x=0,y=#2,z=#3)
-- (tpp cs:x=#1,y=#2,z=#3)
-- (tpp cs:x=#1,y=0,z=#3) -- cycle;
x
\fill[gray] (tpp cs:x=0,y=0,z=0)
   -- (tpp cs:x=0,y=0,z=#3)
-- (tpp cs:x=0,y=#2,z=#3)
-- (tpp cs:x=0,y=#2,z=0) -- cycle;
\fill[gray!50!white] (tpp cs:x=0,y=0,z=0)
-- (tpp cs:x=0,y=0,z=#3)
-- (tpp cs:x=#1,y=0,z=#3)
-- (tpp cs:x=#1,y=0,z=0) -- cycle;}
\newcommand{\simpleaxes}[3]{%
\draw[->] (-0.5,0,0) -- (#1,0,0) node[pos=1.1]{x};
\draw[->] (0,-0.5,0) -- (0,#2,0) node[pos=1.1]{y};
\draw[->] (0,0,-0.5) -- (0,0,#3) node[pos=1.1]{z};}
\begin{tikzpicture}[3d view]
   \simplecuboid{2}{2}{2}
   \simpleaxes{2}{2}{2}

\end{tikzpicture}
```
<!-- {% endraw %} -->