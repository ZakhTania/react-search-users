import { StyledOption, StyledSelect } from "./Select.styled";


type OptionType = {
    value: string;
    name: string;
}
type SelectType = {
    options: Array<OptionType>;
    defaultValue: string; 
    value: string; 
    onChange: (e:string) => void;
}
function Select({ options, defaultValue, value, onChange }:SelectType) {
    return (
      <StyledSelect value={value} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}>
        <option disabled value="">{defaultValue}</option>
        {/* <StyledOption disabled value="">{defaultValue}</StyledOption > */}

        {options.map((option) => (
          <StyledOption  key={option.value} value={option.value}>{option.name}</StyledOption>
        ))}
      </StyledSelect>
    );
  }
  
  export default Select;