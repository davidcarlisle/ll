---
title: Selecting fonts and using Unicode engines
---


XeLaTeX example

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\devanagarifont[Script=Devanagari]{Lohit-Devanagari.ttf}

\begin{document}

ABC → αβγ

{\devanagarifont सर्वधर्मान् परित्यज्य मामेकं शरणं व्र्ज}

\end{document}
```

