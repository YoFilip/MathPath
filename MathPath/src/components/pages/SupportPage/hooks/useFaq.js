import { useMemo } from "react";
import { faqCategories } from "../../../../data/supportData";

export const useFaq = (searchQuery) => ({
    filteredFaqItems: Object.values(faqCategories)
        .flatMap(category =>
            category.items.map(item => ({
                ...item,
                category: category.title
            }))
        )
        .filter(item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
});