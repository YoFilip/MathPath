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
        description: "Poznaj podstawowe pojęcia i własności ciągów liczbowych",
        theory: [
            {
                title: "Czym jest ciąg liczbowy?",
                content: "Ciąg liczbowy to przyporządkowanie, które każdej liczbie naturalnej n przypisuje pewną liczbę rzeczywistą a_n, nazywaną n-tym wyrazem ciągu. Zapisujemy to jako: (a_n)_{n∈ℕ} lub krócej (a_n)."
            },
            {
                title: "Sposoby określania ciągu",
                content: "Ciąg możemy określić na trzy sposoby:\n1. Wzorem ogólnym (wzór na n-ty wyraz)\n2. Poprzez wypisanie kilku pierwszych wyrazów\n3. Poprzez rekurencję (każdy kolejny wyraz zależy od poprzednich)"
            }
        ],
        examples: [
            {
                content: "Ciąg liczb naturalnych: (1, 2, 3, 4, 5, ...)",
                solution: {
                    text: "wzór ogólny:",
                    math: "a_n = n"
                }
            },
            {
                content: "Ciąg potęg dwójki: (1, 2, 4, 8, 16, ...)",
                solution: {
                    text: "wzór ogólny:",
                    math: "a_n = 2^{n-1}"
                }
            },
            {
                content: "Ciąg kwadratów: (1, 4, 9, 16, 25, ...)",
                solution: {
                    text: "wzór ogólny:",
                    math: "a_n = n ^ 2"
                }
            },

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
            }
        ],
        tip: "Zapisując wzór ogólny ciągu, zawsze zwracaj uwagę na to, czy działa on dla wszystkich podanych wyrazów ciągu.",
        prevLesson: { id: "introduction", title: "Wprowadzenie" },
        nextLesson: { id: "arithmetic", title: "Ciąg arytmetyczny" }
    }
};

export const getLessonData = (lessonId) => {
    return lessonData[lessonId];
};