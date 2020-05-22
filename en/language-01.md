---
title: "Language-specifics for English"
---

## hyphenation

LaTeX was written for use with English, and so there are very few
langauge-specific issues facing authors in English. The main one
is hyphenation: UK and US traditions are different. LaTeX starts out
using US English patterns, but you can switch to UK ones using `babel`.

```latex
\documentclass{article}
\usepackage[UKenglish]{babel}
\begin{document}
Some text
\end{document}
```


```latex
%! TEX platex
\documentclass{jsarticle}

\bibliographystyle{jplain}
\title{p\LaTeX\ 実験}
\author{林蓮枝}

\begin{document}

\maketitle

\begin{abstract}
本稿では、文書組版システムp\LaTeX{}の使い方を解説します。p\LaTeX{}を利用するときには、あらかじめ文章中に\TeX{}コマンドと呼ばれる組版用の指示を混在させ\ldots
\end{abstract}

\section{導入}
こんにちは世界！\cite{確率統計}

\bibliography{refs}
\end{document}
```

