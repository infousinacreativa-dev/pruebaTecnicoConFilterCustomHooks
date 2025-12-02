import { useMemo, useState } from "react";

export function usePagination(data = [], itemsPerPage = 8) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return data.slice(start, start + itemsPerPage);
    }, [data, currentPage, itemsPerPage]);

    const goTo = (page) => setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    const next = () => goTo(currentPage + 1);
    const prev = () => goTo(currentPage - 1);

    return { currentPage, totalPages, currentItems, goTo, next, prev };
}