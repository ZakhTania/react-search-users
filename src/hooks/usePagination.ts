import { useMemo } from 'react';

export function usePagination(totalPages: number) {
    const pagesArray = useMemo(() => {
        return [...Array(totalPages)].map((_, i) => i + 1);
    }, [totalPages]);
    return pagesArray;
}
