import { StyledContainer, StyledOption, StyledSelect } from './Select.styled';

type OptionType = {
    value: string | number;
    name: string;
};
type SelectType = {
    options: Array<OptionType>;
    title: string;
    value: string;
    onChange: (e: string) => void;
};
function Select({ options, title, value, onChange }: SelectType) {
    return (
        <StyledContainer>
        <h3>{title}</h3>
            <StyledSelect
                value={value}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}>
                {options.map((option) => (
                    <StyledOption key={option.value} value={option.value}>
                        {option.name}
                    </StyledOption>
                ))}
            </StyledSelect>
        </StyledContainer>
    );
}

export default Select;
