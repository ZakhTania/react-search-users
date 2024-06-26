import styled from 'styled-components';

export const StyledInput = styled.input`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    padding: 14px;

    border: 2px solid #66fcf1;
    font-size: 18px;
    box-sizing: border-box;
    outline: none;
    background: transparent;
    color: #66fcf1;
    
    &:focus {
        border-color:#45a29e;
        background-color: #1f2833;
    }
    
`;
