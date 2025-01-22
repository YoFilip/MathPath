export const lessonData = {
    introduction: {
        title: "Witaj w MathPath!",
        category: "Wprowadzenie",
        description: "Poznaj platformę MathPath i rozpocznij swoją przygodę z matematyką",
        theory: [
            {
                title: "Czym jest MathPath?",
                content: "MathPath to przyjazna platforma do nauki matematyki. Znajdziesz tu:\n• Przystępnie wytłumaczoną teorię\n• Praktyczne przykłady\n• Zadania do samodzielnego rozwiązania z odpowiedziami"
            },
            {
                title: "Jak się uczyć?",
                content: "1. Zacznij od przeczytania teorii\n2. Przeanalizuj dokładnie przykłady\n3. Spróbuj rozwiązać zadania\n4. Sprawdź swoje odpowiedzi\n5. W razie trudności wróć do teorii i przykładów"
            }
        ],
        examples: [],
        exercises: [],
        tip: "Nie spiesz się! Matematyka wymaga systematyczności i zrozumienia każdego kroku.",
        prevLesson: null,
        nextLesson: { id: "seq-intro", title: "Ciągi liczbowe" }
    },
    "seq-intro": {
        title: "Poznajemy ciągi liczbowe",
        category: "Lekcja 1",
        description: "Dowiedz się czym są ciągi liczbowe na prostych przykładach",
        theory: [
            {
                title: "Co to jest ciąg liczbowy?",
                content: "Ciąg liczbowy to po prostu lista liczb ułożonych według jakiejś reguły.\n\nPrzykłady:\n• Liczby naturalne: 1, 2, 3, 4, ...\n• Liczby parzyste: 2, 4, 6, 8, ...\n• Potęgi dwójki: 1, 2, 4, 8, 16, ...\n\nKażdą liczbę w ciągu nazywamy wyrazem ciągu i oznaczamy: $a_1$ (pierwszy wyraz), $a_2$ (drugi wyraz), itd."
            },
            {
                title: "Jak opisać ciąg?",
                content: "Ciąg możemy zapisać na 3 sposoby:\n\n1. Wypisując kolejne wyrazy:\n$(1, 2, 3, 4, ...)$\n\n2. Podając wzór:\n$a_n = n$ (każdy wyraz jest równy swojej pozycji)\n\n3. Opisując słownie:\n'każdy kolejny wyraz jest o 1 większy od poprzedniego'"
            }
        ],
        examples: [],
        exercises: [],
        tip: "Przy analizie ciągu zawsze wypisz kilka pierwszych wyrazów - pomoże Ci to dostrzec regułę!",
        prevLesson: { id: "introduction", title: "Wprowadzenie" },
        nextLesson: { id: "arithmetic", title: "Ciąg arytmetyczny" }
    },
    "arithmetic": {
        title: "Ciąg arytmetyczny",
        category: "Lekcja 2",
        description: "Poznaj ciąg arytmetyczny i jego własności",
        theory: [
            {
                title: "Co to jest ciąg arytmetyczny?",
                content: "Ciąg arytmetyczny to taki ciąg, w którym różnica między każdymi dwoma kolejnymi wyrazami jest stała.\n\nTę stałą różnicę oznaczamy literą r i nazywamy różnicą ciągu arytmetycznego.\n\nAby obliczyć różnicę r, odejmujemy od siebie dowolne dwa sąsiednie wyrazy:\n$r = a_2 - a_1$ lub $r = a_3 - a_2$ itd.\n\nPrzykład:\nDla ciągu $(1, 3, 5, 7, ...)$:\n$r = a_2 - a_1 = 3 - 1 = 2$\n\nDla ciągu $(2, 5, 8, 11, ...)$:\n$r = a_2 - a_1 = 5 - 2 = 3$"
            },
            {
                title: "Wzór na n-ty wyraz",
                content: "Znając pierwszy wyraz ciągu $a_1$ i różnicę $r$, możemy obliczyć każdy wyraz ciągu ze wzoru:\n\n$a_n = a_1 + (n-1)r$\n\nGdzie:\n• $a_1$ - pierwszy wyraz\n• $n$ - numer wyrazu\n• $r$ - różnica ciągu\n\nPrzykład:\nDla ciągu $(1, 3, 5, 7, ...)$:\n• $a_1 = 1$ (pierwszy wyraz)\n• $r = 2$ (różnica)\nWzór: $a_n = 1 + (n-1)\\cdot2$"
            }
        ],
        examples: [
            {
                content: "Przykład 1: Liczby naturalne nieparzyste\n$(1, 3, 5, 7, ...)$\n\nKrok 1: Znajdźmy różnicę r\n$r = a_2 - a_1 = 3 - 1 = 2$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = 1$\n• Różnica: $r = 2$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 + (n-1)r$:\n$a_n = 1 + (n-1)\\cdot2$\n$a_n = 1 + 2n - 2$\n$a_n = 2n - 1$",
                solution: {
                    text: "wzór",
                    math: "a_n = 2n - 1"
                }
            },
            {
                content: "Przykład 2: Ciąg malejący\n$(10, 7, 4, 1, ...)$\n\nKrok 1: Znajdźmy różnicę r\n$r = a_2 - a_1 = 7 - 10 = -3$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = 10$\n• Różnica: $r = -3$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 + (n-1)r$:\n$a_n = 10 + (n-1)\\cdot(-3)$\n$a_n = 10 - 3n + 3$\n$a_n = 13 - 3n$",
                solution: {
                    text: "wzór",
                    math: "a_n = 13 - 3n"
                }
            },
            {
                content: "Przykład 3: Liczby naturalne\n$(1, 2, 3, 4, ...)$\n\nKrok 1: Znajdźmy różnicę r\n$r = a_2 - a_1 = 2 - 1 = 1$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = 1$\n• Różnica: $r = 1$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 + (n-1)r$:\n$a_n = 1 + (n-1)\\cdot1$\n$a_n = 1 + n - 1$\n$a_n = n$",
                solution: {
                    text: "wzór",
                    math: "a_n = n"
                }
            },
            {
                content: "Przykład 4: Liczby parzyste\n$(2, 4, 6, 8, ...)$\n\nKrok 1: Znajdźmy różnicę r\n$r = a_2 - a_1 = 4 - 2 = 2$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = 2$\n• Różnica: $r = 2$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 + (n-1)r$:\n$a_n = 2 + (n-1)\\cdot2$\n$a_n = 2 + 2n - 2$\n$a_n = 2n$",
                solution: {
                    text: "wzór",
                    math: "a_n = 2n"
                }
            },
            {
                content: "Przykład 5: Liczby ujemne\n$(-1, -3, -5, -7, ...)$\n\nKrok 1: Znajdźmy różnicę r\n$r = a_2 - a_1 = -3 - (-1) = -2$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = -1$\n• Różnica: $r = -2$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 + (n-1)r$:\n$a_n = -1 + (n-1)\\cdot(-2)$\n$a_n = -1 - 2n + 2$\n$a_n = 1 - 2n$",
                solution: {
                    text: "wzór",
                    math: "a_n = 1 - 2n"
                }
            }
        ],
        exercises: [
            {
                text: "Podaj różnicę ciągu arytmetycznego:",
                math: "3, 8, 13, 18, ...",
                solution: "$r = a_2 - a_1 = 8 - 3 = 5$ (każdy kolejny wyraz jest o 5 większy)"
            },
            {
                text: "Oblicz piąty wyraz ciągu arytmetycznego:",
                math: "a_1 = 4, r = 3",
                solution: "$a_5 = a_1 + (n-1)r = 4 + (5-1)\\cdot3 = 4 + 12 = 16$"
            },
            {
                text: "Podaj różnicę ciągu arytmetycznego:",
                math: "7, 10, 13, 16, ...",
                solution: "$r = a_2 - a_1 = 10 - 7 = 3$ (każdy kolejny wyraz jest o 3 większy)"
            },
            {
                text: "Oblicz dziesiąty wyraz ciągu arytmetycznego:",
                math: "a_1 = 2, r = 5",
                solution: "$a_{10} = a_1 + (10-1)r = 2 + 9\\cdot5 = 2 + 45 = 47$"
            },
            {
                text: "Podaj różnicę ciągu arytmetycznego:",
                math: "15, 12, 9, 6, ...",
                solution: "$r = a_2 - a_1 = 12 - 15 = -3$ (każdy kolejny wyraz jest o 3 mniejszy)"
            },
            {
                text: "Oblicz siódmy wyraz ciągu arytmetycznego:",
                math: "a_1 = 5, r = -2",
                solution: "$a_7 = a_1 + (7-1)r = 5 + 6\\cdot(-2) = 5 - 12 = -7$"
            },
            {
                text: "Podaj różnicę ciągu arytmetycznego:",
                math: "20, 15, 10, 5, ...",
                solution: "$r = a_2 - a_1 = 15 - 20 = -5$ (każdy kolejny wyraz jest o 5 mniejszy)"
            },
            {
                text: "Oblicz trzeci wyraz ciągu arytmetycznego:",
                math: "a_1 = 7, r = 4",
                solution: "$a_3 = a_1 + (3-1)r = 7 + 2\\cdot4 = 7 + 8 = 15$"
            },
            {
                text: "Podaj różnicę ciągu arytmetycznego:",
                math: "5, 9, 13, 17, ...",
                solution: "$r = a_2 - a_1 = 9 - 5 = 4$ (każdy kolejny wyraz jest o 4 większy)"
            },
            {
                text: "Oblicz ósmy wyraz ciągu arytmetycznego:",
                math: "a_1 = 3, r = 2",
                solution: "$a_8 = a_1 + (8-1)r = 3 + 7\\cdot2 = 3 + 14 = 17$"
            }
        ],
        tip: "Pamiętaj! Aby znaleźć wzór na n-ty wyraz:\n1. Oblicz różnicę $r = a_2 - a_1$\n2. Podstaw $a_1$ i $r$ do wzoru $a_n = a_1 + (n-1)r$",
        prevLesson: { id: "seq-intro", title: "Wprowadzenie do ciągów" },
        nextLesson: { id: "geometric", title: "Ciąg geometryczny" }
    },
    "geometric": {
        title: "Ciąg geometryczny",
        category: "Lekcja 3",
        description: "Poznaj ciąg geometryczny i jego własności",
        theory: [
            {
                title: "Co to jest ciąg geometryczny?",
                content: "Ciąg geometryczny to taki ciąg, w którym iloraz każdych dwóch kolejnych wyrazów jest stały.\n\nTen stały iloraz oznaczamy literą q i nazywamy ilorazem ciągu geometrycznego.\n\nAby obliczyć iloraz q, dzielimy dowolne dwa sąsiednie wyrazy:\n$q = \\frac{a_2}{a_1}$ lub $q = \\frac{a_3}{a_2}$ itd.\n\nPrzykład:\nDla ciągu $(2, 6, 18, 54, ...)$:\n$q = \\frac{a_2}{a_1} = \\frac{6}{2} = 3$\n\nDla ciągu $(81, 27, 9, 3, ...)$:\n$q = \\frac{a_2}{a_1} = \\frac{27}{81} = \\frac{1}{3}$"
            },
            {
                title: "Wzór na n-ty wyraz",
                content: "Znając pierwszy wyraz ciągu $a_1$ i iloraz $q$, możemy obliczyć każdy wyraz ciągu ze wzoru:\n\n$a_n = a_1 \\cdot q^{n-1}$\n\nGdzie:\n• $a_1$ - pierwszy wyraz\n• $n$ - numer wyrazu\n• $q$ - iloraz ciągu\n\nPrzykład:\nDla ciągu $(2, 6, 18, 54, ...)$:\n• $a_1 = 2$ (pierwszy wyraz)\n• $q = 3$ (iloraz)\nWzór: $a_n = 2 \\cdot 3^{n-1}$"
            }
        ],
        examples: [
            {
                content: "Przykład 1: Potęgi dwójki\n$(1, 2, 4, 8, ...)$\n\nKrok 1: Znajdźmy iloraz q\n$q = \\frac{a_2}{a_1} = \\frac{2}{1} = 2$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = 1$\n• Iloraz: $q = 2$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 \\cdot q^{n-1}$:\n$a_n = 1 \\cdot 2^{n-1}$",
                solution: {
                    text: "wzór",
                    math: "a_n = 2^{n-1}"
                }
            },
            {
                content: "Przykład 2: Ciąg malejący\n$(81, 27, 9, 3, ...)$\n\nKrok 1: Znajdźmy iloraz q\n$q = \\frac{a_2}{a_1} = \\frac{27}{81} = \\frac{1}{3}$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = 81$\n• Iloraz: $q = \\frac{1}{3}$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 \\cdot q^{n-1}$:\n$a_n = 81 \\cdot (\\frac{1}{3})^{n-1}$\n$a_n = 81 \\cdot 3^{1-n}$",
                solution: {
                    text: "wzór",
                    math: "a_n = 81 \\cdot 3^{1-n}"
                }
            },
            {
                content: "Przykład 3: Ciąg rosnący\n$(3, 9, 27, 81, ...)$\n\nKrok 1: Znajdźmy iloraz q\n$q = \\frac{a_2}{a_1} = \\frac{9}{3} = 3$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = 3$\n• Iloraz: $q = 3$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 \\cdot q^{n-1}$:\n$a_n = 3 \\cdot 3^{n-1}$\n$a_n = 3^n$",
                solution: {
                    text: "wzór",
                    math: "a_n = 3^n"
                }
            },
            {
                content: "Przykład 4: Ciąg malejący\n$(16, 8, 4, 2, ...)$\n\nKrok 1: Znajdźmy iloraz q\n$q = \\frac{a_2}{a_1} = \\frac{8}{16} = \\frac{1}{2}$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = 16$\n• Iloraz: $q = \\frac{1}{2}$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 \\cdot q^{n-1}$:\n$a_n = 16 \\cdot (\\frac{1}{2})^{n-1}$\n$a_n = 16 \\cdot 2^{1-n}$",
                solution: {
                    text: "wzór",
                    math: "a_n = 16 \\cdot 2^{1-n}"
                }
            },
            {
                content: "Przykład 5: Ciąg rosnący\n$(5, 10, 20, 40, ...)$\n\nKrok 1: Znajdźmy iloraz q\n$q = \\frac{a_2}{a_1} = \\frac{10}{5} = 2$\n\nKrok 2: Mamy dane:\n• Pierwszy wyraz: $a_1 = 5$\n• Iloraz: $q = 2$\n\nKrok 3: Podstawmy do wzoru $a_n = a_1 \\cdot q^{n-1}$:\n$a_n = 5 \\cdot 2^{n-1}$",
                solution: {
                    text: "wzór",
                    math: "a_n = 5 \\cdot 2^{n-1}"
                }
            }
        ],
        exercises: [
            {
                text: "Podaj iloraz ciągu geometrycznego:",
                math: "2, 6, 18, 54, ...",
                solution: "$q = 3$ (każdy kolejny wyraz jest 3 razy większy)"
            },
            {
                text: "Oblicz czwarty wyraz ciągu geometrycznego:",
                math: "a_1 = 1, q = 2",
                solution: "$a_4 = 1 \\cdot 2^{4-1} = 8$"
            },
            {
                text: "Podaj iloraz ciągu geometrycznego:",
                math: "5, 25, 125, 625, ...",
                solution: "$q = 5$ (każdy kolejny wyraz jest 5 razy większy)"
            },
            {
                text: "Oblicz szósty wyraz ciągu geometrycznego:",
                math: "a_1 = 3, q = 3",
                solution: "$a_6 = 3 \\cdot 3^{6-1} = 3 \\cdot 243 = 729$"
            },
            {
                text: "Podaj iloraz ciągu geometrycznego:",
                math: "10, 5, 2.5, 1.25, ...",
                solution: "$q = \\frac{1}{2}$ (każdy kolejny wyraz jest połową poprzedniego)"
            },
            {
                text: "Oblicz piąty wyraz ciągu geometrycznego:",
                math: "a_1 = 4, q = 2",
                solution: "$a_5 = 4 \\cdot 2^{5-1} = 4 \\cdot 16 = 64$"
            },
            {
                text: "Podaj iloraz ciągu geometrycznego:",
                math: "100, 10, 1, 0.1, ...",
                solution: "$q = \\frac{1}{10}$ (każdy kolejny wyraz jest jedną dziesiątą poprzedniego)"
            },
            {
                text: "Oblicz trzeci wyraz ciągu geometrycznego:",
                math: "a_1 = 7, q = 3",
                solution: "$a_3 = 7 \\cdot 3^{3-1} = 7 \\cdot 9 = 63$"
            },
            {
                text: "Podaj iloraz ciągu geometrycznego:",
                math: "8, 4, 2, 1, ...",
                solution: "$q = \\frac{1}{2}$ (każdy kolejny wyraz jest połową poprzedniego)"
            },
            {
                text: "Oblicz ósmy wyraz ciągu geometrycznego:",
                math: "a_1 = 2, q = 3",
                solution: "$a_8 = 2 \\cdot 3^{8-1} = 2 \\cdot 2187 = 4374$"
            }
        ],
        tip: "Aby sprawdzić, czy ciąg jest geometryczny, oblicz ilorazy kolejnych wyrazów - wszystkie powinny być równe!",
        prevLesson: { id: "arithmetic", title: "Ciąg arytmetyczny" },
        nextLesson: { id: "limits", title: "Granica ciągu" }
    },
    "limits": {
        title: "Granica ciągu",
        category: "Lekcja 4",
        description: "Poznaj pojęcie granicy ciągu i jej własności",
        theory: [
            {
                title: "Co to jest granica ciągu?",
                content: "Granica ciągu to liczba, do której zbliżają się wyrazy ciągu, gdy numer wyrazu rośnie nieograniczenie.\n\nJeśli ciąg ma granicę, mówimy że jest zbieżny.\nJeśli ciąg nie ma granicy, mówimy że jest rozbieżny.\n\nAby znaleźć granicę ciągu:\n• Oblicz kolejne wyrazy dla coraz większych n\n• Sprawdź, czy wartości zbliżają się do jakiejś liczby\n\nGranicę ciągu oznaczamy:\n$\\lim_{n \\to \\infty} a_n = g$\n\ngdzie g to granica ciągu."
            },
            {
                title: "Podstawowe granice ciągów",
                content: "1. Ciąg stały: $(c, c, c, ...)$\n   Granica: $\\lim_{n \\to \\infty} c = c$\n\n2. Ciąg $\\frac{1}{n}$: $(1, \\frac{1}{2}, \\frac{1}{3}, ...)$\n   Granica: $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$\n\n3. Ciąg geometryczny:\n   • Gdy $|q| < 1$: granica = 0\n   • Gdy $|q| > 1$: ciąg jest rozbieżny\n   • Gdy $|q| = 1$: granica = $a_1$ (pierwszy wyraz)"
            }
        ],
        examples: [
            {
                content: "Przykład 1: Ciąg $\\frac{1}{n}$\n\nKrok 1: Zapiszmy kilka wyrazów:\n• $a_1 = 1$\n• $a_2 = \\frac{1}{2} = 0.5$\n• $a_3 = \\frac{1}{3} ≈ 0.33$\n• $a_4 = \\frac{1}{4} = 0.25$\n• $a_{10} = \\frac{1}{10} = 0.1$\n• $a_{100} = \\frac{1}{100} = 0.01$\n\nKrok 2: Zauważamy, że:\n• Wyrazy są coraz mniejsze\n• Zbliżają się do zera\n• Nigdy nie osiągną wartości ujemnej\n\nKrok 3: Wniosek:\n$\\lim_{n \\to \\infty} \\frac{1}{n} = 0$",
                solution: {
                    text: "wzór",
                    math: "\\lim_{n \\to \\infty} \\frac{1}{n} = 0"
                }
            },
            {
                content: "Przykład 2: Ciąg geometryczny $(2, 4, 8, 16, ...)$\n\nKrok 1: Znajdźmy wzór ogólny\n• $q = \\frac{a_2}{a_1} = \\frac{4}{2} = 2$\n• $a_1 = 2$\n• Wzór: $a_n = 2 \\cdot 2^{n-1} = 2^n$\n\nKrok 2: Sprawdźmy kilka wyrazów:\n• $a_1 = 2$\n• $a_2 = 4$\n• $a_3 = 8$\n• $a_4 = 16$\n• $a_5 = 32$\n\nKrok 3: Zauważamy, że wyrazy rosną nieograniczenie\n\nWniosek: Ciąg jest rozbieżny do $+\\infty$",
                solution: {
                    text: "wzór",
                    math: "\\lim_{n \\to \\infty} 2^n = +\\infty"
                }
            },
            {
                content: "Przykład 3: Ciąg $(\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, ...)$\n\nKrok 1: Znajdźmy wzór ogólny\n• $q = \\frac{a_2}{a_1} = \\frac{1/4}{1/2} = \\frac{1}{2}$\n• $a_1 = \\frac{1}{2}$\n• Wzór: $a_n = \\frac{1}{2^n}$\n\nKrok 2: Sprawdźmy kilka wyrazów:\n• $a_1 = 0.5$\n• $a_2 = 0.25$\n• $a_3 = 0.125$\n• $a_4 = 0.0625$\n\nKrok 3: Zauważamy, że:\n• $|q| = |\\frac{1}{2}| < 1$\n• Wyrazy zbliżają się do 0\n\nWniosek: $\\lim_{n \\to \\infty} \\frac{1}{2^n} = 0$",
                solution: {
                    text: "wzór",
                    math: "\\lim_{n \\to \\infty} \\frac{1}{2^n} = 0"
                }
            },
            {
                content: "Przykład 4: Ciąg $\\frac{n}{n+1}$\n\nKrok 1: Zapiszmy kilka wyrazów:\n• $a_1 = \\frac{1}{2}$\n• $a_2 = \\frac{2}{3}$\n• $a_3 = \\frac{3}{4}$\n• $a_4 = \\frac{4}{5}$\n• $a_{10} = \\frac{10}{11}$\n\nKrok 2: Zauważamy, że:\n• Wyrazy zbliżają się do 1\n\nKrok 3: Wniosek:\n$\\lim_{n \\to \\infty} \\frac{n}{n+1} = 1$",
                solution: {
                    text: "wzór",
                    math: "\\lim_{n \\to \\infty} \\frac{n}{n+1} = 1"
                }
            },
            {
                content: "Przykład 5: Ciąg $\\frac{2n+1}{n}$\n\nKrok 1: Zapiszmy kilka wyrazów:\n• $a_1 = 3$\n• $a_2 = 2.5$\n• $a_3 = 2.33$\n• $a_4 = 2.25$\n• $a_{10} = 2.1$\n\nKrok 2: Zauważamy, że:\n• Wyrazy zbliżają się do 2\n\nKrok 3: Wniosek:\n$\\lim_{n \\to \\infty} \\frac{2n+1}{n} = 2$",
                solution: {
                    text: "wzór",
                    math: "\\lim_{n \\to \\infty} \\frac{2n+1}{n} = 2"
                }
            }
        ],
        exercises: [
            {
                text: "Oblicz granicę ciągu:",
                math: "a_n = \\frac{2n+1}{n}",
                solution: "$\\lim_{n \\to \\infty} \\frac{2n+1}{n} = 2$ (podziel licznik i mianownik przez $n$)"
            },
            {
                text: "Czy ciąg jest zbieżny?",
                math: "a_n = (-1)^n",
                solution: "Ciąg jest rozbieżny (oscyluje między -1 a 1)"
            },
            {
                text: "Znajdź granicę ciągu:",
                math: "a_n = \\frac{n^2+1}{n^2}",
                solution: "$\\lim_{n \\to \\infty} \\frac{n^2+1}{n^2} = 1$ (podziel licznik i mianownik przez $n^2$)"
            },
            {
                text: "Oblicz granicę ciągu:",
                math: "a_n = \\frac{3n}{n+2}",
                solution: "$\\lim_{n \\to \\infty} \\frac{3n}{n+2} = 3$ (podziel licznik i mianownik przez $n$)"
            },
            {
                text: "Czy ciąg jest zbieżny?",
                math: "a_n = \\frac{(-1)^n}{n}",
                solution: "Ciąg jest zbieżny do 0 (wyrazy zbliżają się do 0)"
            },
            {
                text: "Znajdź granicę ciągu:",
                math: "a_n = \\frac{n+1}{n}",
                solution: "$\\lim_{n \\to \\infty} \\frac{n+1}{n} = 1$ (podziel licznik i mianownik przez $n$)"
            },
            {
                text: "Oblicz granicę ciągu:",
                math: "a_n = \\frac{5n^2+2}{n^2}",
                solution: "$\\lim_{n \\to \\infty} \\frac{5n^2+2}{n^2} = 5$ (podziel licznik i mianownik przez $n^2$)"
            },
            {
                text: "Czy ciąg jest zbieżny?",
                math: "a_n = \\frac{n}{n+1}",
                solution: "Ciąg jest zbieżny do 1 (wyrazy zbliżają się do 1)"
            },
            {
                text: "Znajdź granicę ciągu:",
                math: "a_n = \\frac{n^2+3n+2}{n^2}",
                solution: "$\\lim_{n \\to \\infty} \\frac{n^2+3n+2}{n^2} = 1$ (podziel licznik i mianownik przez $n^2$)"
            },
            {
                text: "Oblicz granicę ciągu:",
                math: "a_n = \\frac{4n+1}{2n}",
                solution: "$\\lim_{n \\to \\infty} \\frac{4n+1}{2n} = 2$ (podziel licznik i mianownik przez $n$)"
            }
        ],
        tip: "Aby znaleźć granicę ciągu:\n1. Zapisz kilka pierwszych wyrazów\n2. Sprawdź, czy wartości maleją/rosną\n3. Zobacz, do jakiej liczby się zbliżają",
        prevLesson: { id: "geometric", title: "Ciąg geometryczny" },
        nextLesson: null
    }
};

export const getLessonData = (lessonId) => {
    return lessonData[lessonId];
};