import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import Select from '../common/Select/Select';
import Title from '../common/Title/Title';
import { StyledSearchDiv } from './UsersFilter.slyled';


type UsersFilterType = {
    filter: {
        sort: string;
        query: string;
    };
    setFilter: (e: { sort: string; query: string }) => void;
};

function UsersFilter({ filter, setFilter }: UsersFilterType) {
    return (
        <>
            <Title>Пользователи</Title>
            <Select
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка по количеству репозиториев"
                options={[
                    { value: 'ascending', name: 'По возрастанию' },
                    { value: 'descending', name: 'По убыванию' }
                ]}
            />
            <StyledSearchDiv>
                <Input type="text" placeholder="" />
                <Button>Найти</Button>
            </StyledSearchDiv>
            {/* <StyledLine /> */}
        </>
    );
}

export default UsersFilter;
