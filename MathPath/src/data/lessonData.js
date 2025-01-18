export const lessonData = {
    introduction: {
        title: "Pierwsze kroki z MathPath",
        category: "Wprowadzenie",
        description: "Poznaj możliwości i funkcjonalności platformy edukacyjnej MathPath",
        theory: [
            {
                title: "Witaj w MathPath!",
                content: "Witaj w MathPath - Twojej interaktywnej platformie do nauki matematyki! Znajdziesz tu materiały, przykłady i ćwiczenia, które pomogą Ci zrozumieć matematykę w przyjazny sposób."
            },
            {
                title: "Jak korzystać z platformy?",
                content: "Każda lekcja składa się z trzech głównych części: teorii, przykładów i ćwiczeń. Zalecamy rozpoczęcie od teorii, następnie przeanalizowanie przykładów, a na końcu rozwiązanie ćwiczeń."
            }
        ],
        examples: [],
        exercises: [],
        tip: "Zalecamy systematyczne przechodzenie przez materiały w zaproponowanej kolejności.",
        prevLesson: null,
        nextLesson: { id: "seq-intro", title: "Ciągi liczbowe" }
    },
    "seq-intro": {
        title: "Wprowadzenie do ciągów",
        category: "Lekcja 1",
        description: "Poznaj podstawowe pojęcia i własności ciągów liczbowych oraz naucz się je rozpoznawać i zapisywać",
        theory: [
            {
                title: "Czym jest ciąg liczbowy?",
                content: "Ciąg liczbowy to przyporządkowanie, które każdej liczbie naturalnej $n$ przypisuje pewną liczbę rzeczywistą $a_n$, nazywaną n-tym wyrazem ciągu. Zapisujemy to jako: $(a_n)_{n∈ℕ}$ lub krócej $(a_n)$.\n\nMożemy o ciągu myśleć jak o liście liczb ułożonych w określonej kolejności, gdzie każda liczba jest wyznaczona według pewnej reguły."
            },
            {
                title: "Jak zapisujemy ciągi?",
                content: "Ciąg możemy zapisać na trzy sposoby:\n• Wypisując kolejne wyrazy: $(1,2,3,4,...)$\n• Podając wzór ogólny: $a_n = n$\n• Opisując regułę słownie: 'każdy kolejny wyraz jest większy od poprzedniego o 1"
            },
            {
                title: "Oznaczenia w ciągach",
                content: "W ciągu liczbowym używamy następujących oznaczeń:\n• $a_n$ - n-ty wyraz ciągu (ogólny wyraz ciągu)\n• $a_1$ - pierwszy wyraz ciągu\n• $a_k$ - k-ty wyraz ciągu\n\nNa przykład, jeśli $a_n = 2n$, to:\n$a_1 = 2 \\cdot 1 = 2$\n$a_2 = 2 \\cdot 2 = 4$\n$a_3 = 2 \\cdot 3 = 6$"
            }
        ],
        examples: [
            {
                content: "Ciąg liczb naturalnych: $(1, 2, 3, 4, 5, ...)$\n\nJest to najprostszy przykład ciągu, gdzie każdy kolejny wyraz jest większy od poprzedniego o 1. Możemy zauważyć, że każdy wyraz jest równy swojej pozycji w ciągu.",
                solution: {
                    text: "wzór ogólny:",
                    math: "a_n = n"
                }
            },
            {
                content: "Ciąg potęg dwójki: $(1, 2, 4, 8, 16, ...)$\n\nW tym ciągu każdy kolejny wyraz powstaje przez pomnożenie poprzedniego przez 2. Zaczynamy od $2^0 = 1$, następnie mamy $2^1 = 2$, $2^2 = 4$, itd. Zauważ, że wykładnik potęgi jest o 1 mniejszy niż pozycja wyrazu w ciągu.",
                solution: {
                    text: "wzór ogólny:",
                    math: "a_n = 2^{n-1}"
                }
            },
            {
                content: "Ciąg kwadratów: $(1, 4, 9, 16, 25, ...)$\n\nTen ciąg powstaje przez podniesienie do kwadratu kolejnych liczb naturalnych. Pierwszy wyraz to $1^2=1$, drugi to $2^2=4$, trzeci to $3^2=9$, itd.",
                solution: {
                    text: "wzór ogólny:",
                    math: "a_n = n^2"
                }
            },
            {
                content: "Ciąg malejący: $(10, 7, 4, 1, -2, ...)$\n\nW tym ciągu każdy kolejny wyraz jest mniejszy od poprzedniego o stałą wartość 3. Możemy zauważyć, że aby otrzymać n-ty wyraz, musimy od liczby 13 odjąć 3 pomnożone przez numer wyrazu.",
                solution: {
                    text: "wzór ogólny:",
                    math: "a_n = 13 - 3n"
                }
            }
        ],
        exercises: [
            {
                text: "Napisz pierwsze 5 wyrazów ciągu, gdzie",
                math: "a_n = 2n - 1",
                solution: "1, 3, 5, 7, 9"
            },
            {
                text: "Podaj wzór ogólny ciągu:",
                math: "(2, 4, 6, 8, 10, ...)",
                solution: "a_n = 2n"
            },
            {
                text: "Znajdź 6-ty wyraz ciągu:",
                math: "a_n = n^2 + 1",
                solution: "37 (ponieważ 6^2 + 1 = 36 + 1 = 37)"
            },
            {
                text: "Wyznacz pierwszy wyraz ciągu $(a_n)$, jeśli:",
                math: "a_n = 3n + 5",
                solution: "8 (dla n = 1: a_1 = 3 · 1 + 5 = 8)"
            }
        ],
        tip: "Przy analizie ciągu zawsze warto wypisać kilka pierwszych wyrazów - pomoże to dostrzec regułę rządzącą ciągiem. Zwróć też uwagę na różnice między kolejnymi wyrazami!",
        prevLesson: { id: "introduction", title: "Wprowadzenie" },
        nextLesson: { id: "arithmetic", title: "Ciąg arytmetyczny" }
    },
    "arithmetic": {
        title: "Ciąg arytmetyczny",
        category: "Lekcja 2",
        description: "Poznaj własności ciągu arytmetycznego, jego wzór ogólny oraz zastosowania w praktyce",
        theory: [
            {
                title: "Czym jest ciąg arytmetyczny?",
                content: "Ciąg arytmetyczny to ciąg liczbowy, w którym różnica między każdymi dwoma kolejnymi wyrazami jest stała. Tę różnicę nazywamy różnicą ciągu i oznaczamy literą $r$.\n\nInaczej mówiąc, aby otrzymać każdy kolejny wyraz ciągu, dodajemy do poprzedniego wyrazu stałą wartość $r$.\n\nMatematycznie zapisujemy to jako:\n$a_{n+1} - a_n = r$ dla każdego $n \\geq 1$"
            },
            {
                title: "Wzór ogólny ciągu arytmetycznego",
                content: "Mając pierwszy wyraz ciągu $a_1$ i różnicę $r$, możemy zapisać wzór na $n$-ty wyraz ciągu arytmetycznego:\n\n$a_n = a_1 + (n-1)r$\n\nWyjaśnienie wzoru:\n• $a_1$ to pierwszy wyraz ciągu\n• $(n-1)$ to liczba \"skoków\" od pierwszego wyrazu do $n$-tego\n• $r$ to wielkość każdego \"skoku\"\n\nPrzykład: Dla ciągu $(2, 5, 8, 11, ...)$:\n• $a_1 = 2$ (pierwszy wyraz)\n• $r = 3$ (różnica między wyrazami)\n• Zatem: $a_n = 2 + (n-1)3 = 2 + 3n - 3 = 3n - 1$"
            },
            {
                title: "Własności ciągu arytmetycznego",
                content: "1. Każdy wyraz (oprócz pierwszego i ostatniego) jest średnią arytmetyczną sąsiednich wyrazów:\n$a_n = \\frac{a_{n-1} + a_{n+1}}{2}$\n\n2. Suma $n$ początkowych wyrazów ciągu arytmetycznego:\n$S_n = \\frac{n(a_1 + a_n)}{2}$\n\nInaczej mówiąc:\n$S_n = \\frac{n}{2}(2a_1 + (n-1)r)$\n\n3. Dla ciągu arytmetycznego zachodzi też własność:\n$a_1 + a_n = a_2 + a_{n-1} = a_3 + a_{n-2}$ itd."
            }
        ],
        examples: [
            {
                content: "Rozważmy ciąg arytmetyczny: $(3, 7, 11, 15, 19, ...)$\n\nMożemy zauważyć, że:\n• Pierwszy wyraz $a_1 = 3$\n• Różnica między kolejnymi wyrazami $r = 4$\n\nSprawdźmy wzór ogólny:\n$a_n = a_1 + (n-1)r = 3 + (n-1)4 = 3 + 4n - 4 = 4n - 1$",
                solution: {
                    text: "wzór ogólny:",
                    math: "a_n = 4n - 1"
                }
            },
            {
                content: "Obliczmy 7-my wyraz ciągu arytmetycznego gdy:\n• $a_1 = 5$ (pierwszy wyraz)\n• $r = 4$ (różnica)\n\nMożemy to zrobić na dwa sposoby:\n\n1. Sposób intuicyjny:\nAby dojść od pierwszego wyrazu do siódmego, musimy wykonać 6 skoków o wartość $r$:\n$a_7 = a_1 + 6r = 5 + 6 \\cdot 4 = 5 + 24 = 29$\n\n2. Używając wzoru ogólnego:\n$a_n = a_1 + (n-1)r$\n$a_7 = 5 + (7-1)4 = 5 + 6 \\cdot 4 = 5 + 24 = 29$\n\nSprawdźmy wypisując wyrazy:\n$(5, 9, 13, 17, 21, 25, 29, ...)$\n\nWniosek: Do pierwszego wyrazu dodajemy różnicę pomnożoną przez liczbę skoków (czyli $n-1$).",
                solution: {
                    text: "siódmy wyraz:",
                    math: "a_7 = 29"
                }
            },
            {
                content: "Znajdźmy sumę pierwszych 5 wyrazów ciągu $(2, 6, 10, 14, 18)$\n\nMożemy użyć wzoru na sumę:\n$S_n = \\frac{n(a_1 + a_n)}{2}$\n\nGdzie:\n• $n = 5$ (liczba wyrazów)\n• $a_1 = 2$ (pierwszy wyraz)\n• $a_5 = 18$ (ostatni wyraz)",
                solution: {
                    text: "obliczenie:",
                    math: "S_5 = \\frac{5(2 + 18)}{2} = \\frac{5 \\cdot 20}{2} = 50"
                }
            }
        ],
        exercises: [
            {
                text: "Znajdź różnicę $r$ ciągu arytmetycznego, jeżeli:",
                math: "a_1 = 3 \\text{ oraz } a_4 = 12",
                solution: "r = 3 (bo 12 = 3 + 3r, zatem 9 = 3r)"
            },
            {
                text: "Wyznacz piąty wyraz ciągu arytmetycznego:",
                math: "a_1 = 4, r = 3",
                solution: "16 (bo $a_5 = 4 + (5-1)3 = 4 + 12 = 16$)"
            },
            {
                text: "Oblicz sumę pierwszych 6 wyrazów ciągu arytmetycznego:",
                math: "a_1 = 3, r = 2",
                solution: "48 (bo $a_6 = 3 + 5 \\cdot 2 = 13$ i $S_6 = \\frac{6(3 + 13)}{2} = 48$)"
            }
        ],
        tip: "Przy rozwiązywaniu zadań z ciągów arytmetycznych zawsze zacznij od znalezienia różnicy ciągu (r). Mając r i pierwszy wyraz, możesz łatwo znaleźć dowolny inny wyraz ciągu!",
        prevLesson: { id: "seq-intro", title: "Wprowadzenie do ciągów" },
        nextLesson: { id: "geometric", title: "Ciąg geometryczny" }
    }, "geometric": {
        title: "Ciąg geometryczny",
        category: "Lekcja 3",
        description: "Poznaj własności ciągu geometrycznego, jego wzór ogólny oraz praktyczne zastosowania w matematyce i życiu codziennym",
        theory: [
            {
                title: "Czym jest ciąg geometryczny?",
                content: "Ciąg geometryczny to ciąg liczbowy, w którym iloraz każdych dwóch kolejnych wyrazów jest stały. Ten stały iloraz nazywamy ilorazem ciągu i oznaczamy literą $q$.\n\nInaczej mówiąc, aby otrzymać każdy kolejny wyraz ciągu, mnożymy poprzedni wyraz przez stałą wartość $q$.\n\nMatematycznie zapisujemy to jako:\n$\\frac{a_{n+1}}{a_n} = q$ dla każdego $n \\geq 1$"
            },
            {
                title: "Wzór ogólny ciągu geometrycznego",
                content: "Mając pierwszy wyraz ciągu $a_1$ i iloraz $q$, możemy zapisać wzór na $n$-ty wyraz ciągu geometrycznego:\n\n$a_n = a_1 \\cdot q^{n-1}$\n\nWyjaśnienie wzoru:\n• $a_1$ to pierwszy wyraz ciągu\n• $q$ to iloraz ciągu\n• $(n-1)$ to liczba mnożeń przez $q$ potrzebnych do otrzymania $n$-tego wyrazu\n\nPrzykład: Dla ciągu $(2, 6, 18, 54, ...)$:\n• $a_1 = 2$ (pierwszy wyraz)\n• $q = 3$ (iloraz między wyrazami)\n• Zatem: $a_n = 2 \\cdot 3^{n-1}$"
            },
            {
                title: "Własności ciągu geometrycznego",
                content: "1. Każdy wyraz (oprócz pierwszego i ostatniego) jest średnią geometryczną sąsiednich wyrazów:\n$a_n = \\sqrt{a_{n-1} \\cdot a_{n+1}}$\n\n2. Suma $n$ początkowych wyrazów ciągu geometrycznego (dla $q \\neq 1$):\n$S_n = a_1\\frac{1-q^n}{1-q}$\n\n3. Dla $q = 1$ ciąg jest stały i jego suma wynosi:\n$S_n = n \\cdot a_1$\n\n4. Iloczyn dowolnych dwóch wyrazów o indeksach różniących się o $k$ jest stały:\n$a_m \\cdot a_{m+k} = a_p \\cdot a_{p+k}$"
            }
        ],
        examples: [
            {
                content: "Rozważmy ciąg geometryczny: $(2, 6, 18, 54, ...)$\n\nMożemy zauważyć, że:\n• Pierwszy wyraz $a_1 = 2$\n• Iloraz między kolejnymi wyrazami $q = 3$\n\nSprawdźmy wzór ogólny:\n$a_n = a_1 \\cdot q^{n-1} = 2 \\cdot 3^{n-1}$\n\nSprawdźmy dla $n = 4$:\n$a_4 = 2 \\cdot 3^{4-1} = 2 \\cdot 3^3 = 2 \\cdot 27 = 54$",
                solution: {
                    text: "wzór ogólny:",
                    math: "a_n = 2 \\cdot 3^{n-1}"
                }
            },
            {
                content: "Obliczmy sumę pierwszych 4 wyrazów ciągu geometrycznego: $(1, 2, 4, 8)$\n\nMamy:\n• $a_1 = 1$ (pierwszy wyraz)\n• $q = 2$ (iloraz)\n• $n = 4$ (liczba wyrazów)\n\nStosujemy wzór na sumę:\n$S_n = a_1\\frac{1-q^n}{1-q}$\n\n$S_4 = 1\\frac{1-2^4}{1-2} = 1\\frac{1-16}{-1} = 1\\frac{-15}{-1} = 15$\n\nSprawdźmy: $1 + 2 + 4 + 8 = 15$",
                solution: {
                    text: "suma pierwszych 4 wyrazów:",
                    math: "S_4 = 15"
                }
            },
            {
                content: "Znajdźmy piąty wyraz ciągu geometrycznego, gdy:\n• $a_1 = 3$ (pierwszy wyraz)\n• $q = \\frac{1}{2}$ (iloraz)\n\nStosujemy wzór ogólny:\n$a_n = a_1 \\cdot q^{n-1}$\n\nDla $n = 5$:\n$a_5 = 3 \\cdot (\\frac{1}{2})^{5-1} = 3 \\cdot (\\frac{1}{2})^4 = 3 \\cdot \\frac{1}{16} = \\frac{3}{16}$\n\nSprawdźmy wypisując wyrazy:\n$(3, \\frac{3}{2}, \\frac{3}{4}, \\frac{3}{8}, \\frac{3}{16})$",
                solution: {
                    text: "piąty wyraz:",
                    math: "a_5 = \\frac{3}{16}"
                }
            }
        ],
        exercises: [
            {
                text: "Znajdź iloraz $q$ ciągu geometrycznego, jeżeli:",
                math: "a_1 = 2 \\text{ oraz } a_3 = 18",
                solution: "q = 3 (bo 18 = 2 \\cdot q^2, więc q^2 = 9)"
            },
            {
                text: "Oblicz szósty wyraz ciągu geometrycznego:",
                math: "a_1 = 1, q = 3",
                solution: "243 (bo $a_6 = 1 \\cdot 3^5 = 243$)"
            },
            {
                text: "Oblicz sumę pierwszych 5 wyrazów ciągu geometrycznego:",
                math: "a_1 = 3, q = 2",
                solution: "93 (bo $S_5 = 3\\frac{1-2^5}{1-2} = 3\\frac{1-32}{-1} = 93$)"
            }
        ],
        tip: "Przy rozwiązywaniu zadań z ciągów geometrycznych zawsze zacznij od znalezienia ilorazu ciągu (q). Pamiętaj, że kolejne wyrazy otrzymujemy przez mnożenie, a nie dodawanie jak w ciągu arytmetycznym!",
        prevLesson: { id: "arithmetic", title: "Ciąg arytmetyczny" },
        nextLesson: { id: "limits", title: "Granica ciągu" }
    },"limits": {
    title: "Granica ciągu",
    category: "Lekcja 4",
    description: "Poznaj pojęcie granicy ciągu, naucz się ją obliczać i interpretować jej znaczenie w matematyce",
    theory: [
        {
            title: "Czym jest granica ciągu?",
            content: "Granica ciągu to wartość, do której zbliżają się wyrazy ciągu gdy numer wyrazu rośnie nieograniczenie. Oznaczamy ją symbolem $\\lim_{n \\to \\infty} a_n$.\n\nJeśli ciąg ma granicę równą $g$, to elementy ciągu stają się dowolnie bliskie tej wartości dla odpowiednio dużych $n$.\n\nMatematycznie zapisujemy to jako:\n$\\lim_{n \\to \\infty} a_n = g$"
        },
        {
            title: "Własności granic ciągów",
            content: "1. Granica sumy ciągów zbieżnych:\n$\\lim_{n \\to \\infty} (a_n + b_n) = \\lim_{n \\to \\infty} a_n + \\lim_{n \\to \\infty} b_n$\n\n2. Granica iloczynu ciągów zbieżnych:\n$\\lim_{n \\to \\infty} (a_n \\cdot b_n) = \\lim_{n \\to \\infty} a_n \\cdot \\lim_{n \\to \\infty} b_n$\n\n3. Granica ilorazu ciągów zbieżnych (gdy granica mianownika jest różna od 0):\n$\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = \\frac{\\lim_{n \\to \\infty} a_n}{\\lim_{n \\to \\infty} b_n}$"
        },
        {
            title: "Ważne granice ciągów",
            content: "1. Dla $|q| < 1$:\n$\\lim_{n \\to \\infty} q^n = 0$\n\n2. Dla dowolnego $a > 0$:\n$\\lim_{n \\to \\infty} \\frac{1}{n^a} = 0$\n\n3. Dla dowolnego $a > 0$:\n$\\lim_{n \\to \\infty} \\sqrt[n]{a} = 1$\n\n4. $\\lim_{n \\to \\infty} \\sqrt[n]{n} = 1$"
        }
    ],
    examples: [
        {
            content: "Obliczmy granicę ciągu $a_n = \\frac{1}{n}$\n\nDla coraz większych wartości $n$, wyrazy ciągu stają się coraz mniejsze:\n$a_1 = 1$\n$a_{10} = 0.1$\n$a_{100} = 0.01$\n$a_{1000} = 0.001$\n\nMożemy zauważyć, że wyrazy zbliżają się do 0.",
            solution: {
                text: "granica:",
                math: "\\lim_{n \\to \\infty} \\frac{1}{n} = 0"
            }
        },
        {
            content: "Znajdźmy granicę ciągu geometrycznego $(2, \\frac{2}{3}, \\frac{2}{9}, \\frac{2}{27}, ...)$\n\nMożemy zapisać wzór ogólny:\n$a_n = 2 \\cdot (\\frac{1}{3})^{n-1} = \\frac{2}{3^{n-1}}$\n\nPonieważ $|\\frac{1}{3}| < 1$, to $\\lim_{n \\to \\infty} (\\frac{1}{3})^{n-1} = 0$",
            solution: {
                text: "granica:",
                math: "\\lim_{n \\to \\infty} \\frac{2}{3^{n-1}} = 0"
            }
        },
        {
            content: "Obliczmy granicę ciągu $a_n = \\frac{2n+1}{n-3}$\n\nAby znaleźć granicę, podzielmy licznik i mianownik przez najwyższą potęgę $n$:\n\n$\\lim_{n \\to \\infty} \\frac{2n+1}{n-3} = \\lim_{n \\to \\infty} \\frac{2 + \\frac{1}{n}}{1 - \\frac{3}{n}} = \\frac{2 + 0}{1 - 0} = 2$",
            solution: {
                text: "granica:",
                math: "\\lim_{n \\to \\infty} \\frac{2n+1}{n-3} = 2"
            }
        }
    ],
    exercises: [
        {
            text: "Oblicz granicę ciągu:",
            math: "a_n = \\frac{n+2}{2n}",
            solution: "\\frac{1}{2} (bo $\\lim_{n \\to \\infty} \\frac{n+2}{2n} = \\lim_{n \\to \\infty} \\frac{1 + \\frac{2}{n}}{2} = \\frac{1}{2}$)"
        },
        {
            text: "Znajdź granicę ciągu geometrycznego:",
            math: "a_1 = 3, q = \\frac{1}{2}",
            solution: "0 (bo $|q| < 1$, więc granica ciągu geometrycznego wynosi 0)"
        },
        {
            text: "Oblicz granicę ciągu:",
            math: "a_n = \\sqrt[n]{2}",
            solution: "1 (z twierdzenia o granicy pierwiastka n-tego stopnia z dowolnej liczby dodatniej)"
        }
    ],
    tip: "Przy obliczaniu granic ciągów pamiętaj o podstawowych granicach i twierdzeniach o działaniach na granicach. W przypadku ułamków często pomaga podzielenie licznika i mianownika przez najwyższą potęgę!",
    prevLesson: { id: "geometric", title: "Ciąg geometryczny" },
    nextLesson: { id: "seq-practice", title: "Zadania z ciągów" }
},
"seq-practice": {
    title: "Zadania z ciągów",
    category: "Lekcja 5",
    description: "Zestaw różnorodnych zadań dotyczących ciągów arytmetycznych i geometrycznych oraz granic ciągów",
    theory: [
        {
            title: "Przygotowanie do rozwiązywania zadań",
            content: "Przed rozwiązaniem zadania:\n1. Określ typ ciągu (arytmetyczny, geometryczny lub inny)\n2. Wypisz dane i szukane wielkości\n3. Przypomnij odpowiednie wzory\n4. Zaplanuj kolejność kroków rozwiązania"
        }
    ],
    examples: [
        {
            content: "Zadanie 1: W ciągu arytmetycznym $a_3 = 10$ oraz $a_7 = 26$. Oblicz różnicę ciągu $r$ oraz pierwszy wyraz $a_1$.\n\nRozwiązanie:\n1) Dla $a_3$ i $a_7$ możemy napisać:\n$a_3 = a_1 + 2r = 10$\n$a_7 = a_1 + 6r = 26$\n\n2) Odejmując równania:\n$a_7 - a_3 = 4r = 16$\nStąd $r = 4$\n\n3) Z równania $a_3 = a_1 + 2r = 10$:\n$a_1 + 2 \\cdot 4 = 10$\n$a_1 + 8 = 10$\n$a_1 = 2$",
            solution: {
                text: "odpowiedź:",
                math: "r = 4, a_1 = 2"
            }
        },
        {
            content: "Zadanie 2: Suma pierwszych trzech wyrazów ciągu geometrycznego wynosi 14, a ich iloczyn jest równy 64. Znajdź te wyrazy.\n\nRozwiązanie:\n1) Oznaczmy wyrazy jako $a$, $aq$, $aq^2$\n\n2) Z warunków zadania:\n$a + aq + aq^2 = 14$\n$a \\cdot aq \\cdot aq^2 = 64$\n\n3) Z drugiego równania:\n$a^3q^3 = 64$\n$a^3q^3 = 2^6$\n\n4) Podstawiając $q = 2$:\n$a + 2a + 4a = 14$\n$7a = 14$\n$a = 2$\n\nStąd wyrazy: 2, 4, 8",
            solution: {
                text: "wyrazy ciągu:",
                math: "2, 4, 8"
            }
        }
    ],
    exercises: [
        {
            text: "Wyznacz wyraz $a_8$ ciągu arytmetycznego, wiedząc że:",
            math: "a_1 = -3 \\text{ oraz } r = 4",
            solution: "25 (bo $a_8 = -3 + 7 \\cdot 4 = 25$)"
        },
        {
            text: "W ciągu geometrycznym $a_2 = 18$ oraz $a_4 = 162$. Oblicz:",
            math: "a_1 \\text{ oraz } q",
            solution: "$a_1 = 6, q = 3$ (bo $\\frac{a_4}{a_2} = q^2 = 9$)"
        },
        {
            text: "Oblicz sumę wszystkich wyrazów ciągu arytmetycznego, gdzie:",
            math: "a_1 = 3, a_8 = 24, n = 8",
            solution: "108 (bo $S_8 = \\frac{8(3 + 24)}{2} = 108$)"
        }
    ],
    tip: "W zadaniach z ciągów często kluczem do sukcesu jest odpowiednie zapisanie danych w postaci równań. Nie zapomnij sprawdzić, czy otrzymane rozwiązanie spełnia wszystkie warunki zadania!",
    prevLesson: { id: "limits", title: "Granica ciągu" },
    nextLesson: { id: "data-analysis", title: "Analiza danych" }
}

};  

export const getLessonData = (lessonId) => {
    return lessonData[lessonId];
};