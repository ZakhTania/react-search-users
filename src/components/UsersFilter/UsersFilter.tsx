import { FilterType } from '../../types/types';
import Input from '../common/Input/Input';
import Select from '../common/Select/Select';
import Title from '../common/Title/Title';
import { StyledSearchDiv, StyledSelectsWrap } from './UsersFilter.slyled';

type UsersFilterType = {
    filter: FilterType;
    setFilter: (e: FilterType) => void;
};

function UsersFilter({ filter, setFilter }: UsersFilterType) {
    return (
        <>
            <Title>Поиск пользователей</Title>
            <StyledSearchDiv>
                <Input
                    value={filter.query}
                    type="text"
                    placeholder="Введите логин пользлвателя"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFilter({ ...filter, query: e.target.value })
                    }
                />
                {/* <Button onClick={onClick}>Найти</Button> */}
            </StyledSearchDiv>
            <StyledSelectsWrap>
                <Select
                    value={filter.sort}
                    onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                    title="Количество репозиториев"
                    options={[
                        { value: 'asc', name: 'По возрастанию' },
                        { value: 'desc', name: 'По убыванию' }
                    ]}
                />
                <Select
                    value={filter.perPage}
                    onChange={(selectedCount) => setFilter({ ...filter, perPage: selectedCount })}
                    title="Показывать по"
                    options={[
                        { value: 15, name: '15' },
                        { value: 30, name: '30' },
                        { value: 60, name: '60' }
                    ]}
                />
            </StyledSelectsWrap>
        </>
    );
}

export default UsersFilter;
