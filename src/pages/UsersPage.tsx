import { useEffect, useState } from 'react';
import { GlobalSlyle } from '../Global.styled';
import UsersFilter from '../components/UsersFilter/UsersFilter';
import Wrapper from '../components/common/Wrapper/Wrapper';
import { getUsers } from '../API/usersApi';
import { FilterType, PagesType, UserType } from '../types/types';
import { getPageCount } from '../utils/pages';
import UsersList from '../components/UsersList/UsersList';
import Pagination from '../components/common/Pagination/Pagination';
import Heading from '../components/common/Heading/Heading';
import Loader from '../components/common/Loader/Loader';

function UsersPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [users, setUsers] = useState<UserType[] | []>([]);
    const [filter, setFilter] = useState<FilterType>({ sort: 'desc', query: '', perPage: '30' });
    const [pages, setPages] = useState<PagesType>({ currentPage: 1, totalPages: 0 });
    const [firstIndex, setFirstIndex] = useState(0);

    const fetchUsers = async () => {
        if (filter.query !== '') {
            try {
                setError('');
                setIsLoading(true);
                const response = await getUsers({
                    q: filter.query,
                    order: filter.sort === 'asc' ? 'asc' : 'desc',
                    per_page: Number(filter.perPage),
                    page: pages.currentPage
                });

                const totalCount = response.total_count;
                if (totalCount === 0) {
                    throw new Error(`Пользователели с логином ${filter.query} не найдены`);
                }
                setUsers(response.items);
                setPages({
                    ...pages,
                    totalPages: getPageCount(totalCount, Number(filter.perPage))
                });
            } catch (e) {
                setError(e.message);
                setUsers([]);
                setPages({ currentPage: 1, totalPages: 0 });
            } finally {
                setIsLoading(false);
            }
        }
        return;
    };
    useEffect(() => {
        fetchUsers();
    }, [filter, pages.currentPage]);

    function changePage(page: number) {
        setPages({ ...pages, currentPage: page });
    }

    return (
        <>
            <GlobalSlyle />
            <Wrapper>
                <UsersFilter filter={filter} setFilter={setFilter} />
                {isLoading ? (
                    <>
                        <Loader />
                        <div>Идёт загрузка....</div>
                    </>
                ) : (
                    <>
                        {error ? (
                            <Heading>{error}</Heading>
                        ) : (
                            <>
                                {!!pages.totalPages && (
                                    <div>
                                        <UsersList users={users} title="Список пользователей" />
                                        <Pagination
                                            firstIndex={firstIndex}
                                            setFirstIndex={setFirstIndex}
                                            changePage={changePage}
                                            pages={pages}
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </Wrapper>
        </>
    );
}

export default UsersPage;
