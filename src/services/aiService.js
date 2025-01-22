import * as tf from '@tensorflow/tfjs';

export class QuizAI {
    constructor() {
        this.model = this.createModel();
        this.difficulty = 1;
        this.userHistory = [];
        this.questionTypes = ['arithmetic', 'geometric', 'identification', 'formula'];
    }

    createModel() {
        const model = tf.sequential({
            layers: [
                tf.layers.dense({ units: 32, activation: 'relu', inputShape: [4] }),
                tf.layers.dense({ units: 16, activation: 'relu' }),
                tf.layers.dense({ units: 1, activation: 'sigmoid' })
            ]
        });
        model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' });
        return model;
    }

    calculateDifficulty(performance) {
        if (performance < 0.3) return 1;
        if (performance < 0.6) return 2;
        return 3;
    }

    generateQuestion(difficulty) {
        const type = this.questionTypes[Math.floor(Math.random() * this.questionTypes.length)];

        switch (type) {
            case 'arithmetic':
                return this.generateArithmeticQuestion(difficulty);
            case 'geometric':
                return this.generateGeometricQuestion(difficulty);
            case 'identification':
                return this.generateIdentificationQuestion(difficulty);
            case 'formula':
                return this.generateFormulaQuestion(difficulty);
            default:
                return this.generateArithmeticQuestion(difficulty);
        }
    }

    generateArithmeticQuestion(difficulty) {
        const a1 = Math.floor(Math.random() * (5 * difficulty)) - (2 * difficulty);
        const r = Math.floor(Math.random() * (3 * difficulty)) + 1;
        const sequence = Array.from({ length: 4 }, (_, i) => a1 + i * r);

        return {
            question: `Dany jest ciąg arytmetyczny: (${sequence.join(", ")}, ...). Znajdź różnicę (r) tego ciągu.`,
            answer: r,
            type: 'numeric',
            difficulty
        };
    }

    generateGeometricQuestion(difficulty) {
        const a1 = Math.floor(Math.random() * (3 * difficulty)) + 1;
        const q = Math.floor(Math.random() * (2 * difficulty)) + 2;
        const sequence = Array.from({ length: 4 }, (_, i) => a1 * Math.pow(q, i));

        return {
            question: `Dany jest ciąg geometryczny: (${sequence.join(", ")}, ...). Znajdź iloraz (q) tego ciągu.`,
            answer: q,
            type: 'numeric',
            difficulty
        };
    }

    generateIdentificationQuestion(difficulty) {
        const isArithmetic = Math.random() < 0.5;
        const a1 = Math.floor(Math.random() * (3 * difficulty)) + 1;
        const ratio = Math.floor(Math.random() * (2 * difficulty)) + 2;
        const sequence = Array.from({ length: 4 }, (_, i) =>
            isArithmetic ? a1 + i * ratio : a1 * Math.pow(ratio, i)
        );

        return {
            question: `Określ typ ciągu: (${sequence.join(", ")}, ...)`,
            answer: isArithmetic ? "arytmetyczny" : "geometryczny",
            type: 'identification',
            difficulty
        };
    }

    generateFormulaQuestion(difficulty) {
        const isArithmetic = Math.random() < 0.5;
        const a1 = Math.floor(Math.random() * (3 * difficulty)) + 1;
        const ratio = Math.floor(Math.random() * (2 * difficulty)) + 2;
        const sequence = Array.from({ length: 4 }, (_, i) =>
            isArithmetic ? a1 + i * ratio : a1 * Math.pow(ratio, i)
        );

        return {
            question: `Podaj wzór ogólny dla ciągu: (${sequence.join(", ")}, ...)`,
            answer: isArithmetic ? `an = ${a1} + (n-1)*${ratio}` : `an = ${a1}*${ratio}^(n-1)`,
            type: 'formula',
            difficulty
        };
    }

    async getNextQuestion(performance) {
        const difficulty = this.calculateDifficulty(performance);
        return this.generateQuestion(difficulty);
    }

    async train() {
        if (this.userHistory.length < 5) return;

        const recentHistory = this.userHistory.slice(-5);
        const xs = tf.tensor2d(recentHistory.map(h => [h.difficulty, h.correct ? 1 : 0]));
        const ys = tf.tensor1d(recentHistory.map(h => h.correct ? 1 : 0));

        await this.model.fit(xs, ys, {
            epochs: 10,
            verbose: 0
        });

        xs.dispose();
        ys.dispose();
    }

    updateModel(wasCorrect, questionDifficulty) {
        this.userHistory.push({ correct: wasCorrect, difficulty: questionDifficulty });
        this.train();
    }
}