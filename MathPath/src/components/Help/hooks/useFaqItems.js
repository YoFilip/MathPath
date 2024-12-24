import { useMemo } from "react";
import { faqCategories } from "../../../data/helpCenterData";

export const useFaqItems = (searchQuery) => {
    const filteredFaqItems = useMemo(() => {
        const allFaqItems = Object.values(faqCategories).flatMap((category) =>
            category.items.map((item) => ({
                ...item,
                category: category.title,
            }))
        );

        return allFaqItems.filter(
            (item) =>
                item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return { filteredFaqItems };
};