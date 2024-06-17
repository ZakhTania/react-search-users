import styled from 'styled-components';

export const StyledSelect = styled.select`
    -webkit-appearance: none; /* Стиль для Safari */
    -moz-appearance: none; /* Стиль для Firefox */
    appearance: none;
    background: transparent;
    border: 2px solid #66fcf1;
    padding: 5px 30px 5px 10px; /* Резервируем место под стрелку */
    border-radius: 10px;
    font-size: 18px;
    color: #66fcf1;
    outline: none;
    cursor: pointer;
`;

export const StyledOption = styled.option`
    background-color: #66fcf1;
    color: black;
`;
