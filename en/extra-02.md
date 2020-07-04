---
title: "Common errors"
erra: "<span style='color:red'>\textbold</span>"
---

Unlike a typical word processing system, LaTeX has an Edit/Run/View cycle
closer to working with programming language compilers, and as in programming
users may make errors in their input and so need to deal with error messages
reported by the system.

This page gives examples of several common errors.

Each error example has some discussion about the form of the error
message. It may be instructive to try the examples but also use the
edit features to try to fix the documents and test the errors go.

## pdflatex not found

An common first error that people see when starting is:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```

on windows or
``` bash: pdflatex: command not found ```
on linux

This is
not a TeX error but an operating system error saying that TeX is not
installed or not found.  A common mistake is to install an _editor_
such a TeXWorks or TeXShop but without installing a TeX system such as
texlive or MikTeX.

## Anatomy of a TeX error message
```
\documentclass{article}

\newcommand\mycommand\textbold{{page.erra}}{hmmm}}

\begin{document}

My command is used here \mycommand. {{page.erra}} jjj

\end{document}
```


This produces a multi-line message in the log file.

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.7 My command is used here \mycommand
                                      .
? 
```

* The first line, marked with `!` gives the general nature of the error (undefined command in this case).
* The second pair of lines show the line that TeX was processing, with a linebreak marking the point
  that TeX had reached. The undefined command is the last token read so the last word before the line break
  `\textbold` here. After the line break are the remaining tokens `{hmmm}` that have possibly been read as
  an argument but have not yet been executed by TeX.
* There may in general be some additional lines at this point, showing more context of the error message,
* The final line starts with `l.` followed by a line number, and then the line in the source file where the
  error is detected.

* The final line is a `?` if using TeX interactively it is possible to
  enter instructions to TeX at this point but most editors and online
  systems run TeX in a mode that does not stop at errors but will
  scrol past this and try to process the rest of the document (typing
  `s` to the prompt will instruct TeX to carry on inthis mode if you
  are working interactively.


Note here that TeX does not see the error at the point that
the definition is made; and in fact if `\mycommand` is defined but not
used, no error would be raised. So although the error is reported on
line 7, the "real" error is in the definition on line 3, so it is
important to see the whole error message.

Beware that some editors show one line "summaries" of the error log
this can be particularly misleading if shown as
`line 7: undefined command: ...\mycommand`
as it makes it appear that `\mycommand` is not defined.


## Mismatched braces

```
\documentclass{article}

\begin{document}

 Text {\large some large text)  normal size?

\end{document}
```

In this example the size change was mistakenly ended with `)` rather
than `}` This is not detected until the end of the file when TeX
detects that there is still an unclosed group. It reports here the
line at which the group was opened `{` It can not detect the actual
error as the `)` is seen as "normal text".


```
\documentclass{article}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Here the error is a similar mis-match, `}` used to end the optional
argument. Here though the closing brace causes LaTeX's option parsing
to fail and you get an internal and not that helpful error  
`! Argument of \@fileswith@ptions has an extra }.`  
although while the error description is unhelpful the following two
lines do accurately display the location of the error by the use of
the linebreak showing how far TeX had read:
```
l.3 \usepackage[leqno}
                      {amsmath}
```


## Missing files

```
\documentclass{article}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

This produces the error

`! LaTeX Error: File \`amsmathz.sty' not found.`

Note the same error may be caused by two different causes, a simple
typo as here, which may be corrected by fixing the package name, or
that the file really is missing and needs to be installed on the
current system.

## Blank lines in display math

```
\documentclass{article}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```
Produces the slightly mysterious error

`! Missing $ inserted.`

But the fix is simple, blank lines are not allowed in display math
environments and should be delted.

