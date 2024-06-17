import { FilterType } from '../../types/types';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import Select from '../common/Select/Select';
import Title from '../common/Title/Title';
import { StyledSearchDiv } from './UsersFilter.slyled';

type UsersFilterType = {
    filter: FilterType;
    setFilter: (e: { sort: string; query: string }) => void;
    onClick: () => void;
};

function UsersFilter({ filter, setFilter, onClick }: UsersFilterType) {
    return (
        <>
            <Title>Пользователи</Title>
            <Select
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                title="Сортировка"
                options={[
                    { value: 'asc', name: 'По возрастанию количества репозиториев' },
                    { value: 'desc', name: 'По убыванию количества репозиториев' }
                ]}
            />
            <StyledSearchDiv>
                <Input
                    value={filter.query}
                    type="text"
                    placeholder="Введите логин пользлвателя"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFilter({ ...filter, query: e.target.value })
                    }
                />
                <Button onClick={onClick}>Найти</Button>
            </StyledSearchDiv>
        </>
    );
}

export default UsersFilter;
