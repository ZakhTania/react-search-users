import { useEffect, useState } from 'react';
import { usePagination } from '../../../hooks/usePagination';
import { PagesType } from '../../../types/types';
import { CurrentPageNumber, PageNumber, PagesNumbersWrap } from './Pagination.styled';

type PaginationType = {
    pages: PagesType;
    changePage: (p: number) => void;
    firstIndex: number;
    setFirstIndex: (p: number) => void;
};

function Pagination({ pages, changePage, firstIndex, setFirstIndex }: PaginationType) {
    const [currentPagesNumbers, setCurrentPagesNumbers] = useState([]);
    const pagesArray = usePagination(pages.totalPages);

    useEffect(() => {
        const pagesCount = 10;
        const begin = firstIndex;
        const end = begin + pagesCount;
        const newCurrentPages = pagesArray.slice(begin, end);
        setCurrentPagesNumbers(newCurrentPages);
    }, [firstIndex]);

    function nextPage() {
        const lastItem = currentPagesNumbers[currentPagesNumbers.length - 1];
        const newCurrentPage = pages.currentPage + 1;

        if (newCurrentPage > lastItem) {
            const newFirstPage = firstIndex + 1;
            setFirstIndex(newFirstPage);
        }
        changePage(newCurrentPage);
    }
    function prevPage() {
        const firstItem = currentPagesNumbers[0];
        const newCurrentPage = pages.currentPage - 1;
        if (newCurrentPage < firstItem && firstItem !== 1) {
            const newFirstPage = firstIndex - 1;
            setFirstIndex(newFirstPage);
        }
        changePage(newCurrentPage);
    }
    return (
        <PagesNumbersWrap>
            <PageNumber disabled={pages.currentPage === 1} onClick={prevPage}>
                Предыдущая
            </PageNumber>
            {currentPagesNumbers.map((p: number) => {
                const result =
                    pages.currentPage === p ? (
                        <CurrentPageNumber key={p} onClick={() => changePage(p)}>
                            {p}
                        </CurrentPageNumber>
                    ) : (
                        <PageNumber key={p} onClick={() => changePage(p)}>
                            {p}
                        </PageNumber>
                    );
                return result;
            })}
            <PageNumber disabled={pages.currentPage > pages.totalPages} onClick={nextPage}>
                Следующая
            </PageNumber>
        </PagesNumbersWrap>
    );
}

export default Pagination;
