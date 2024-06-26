import styled from 'styled-components';

export const PageNumber = styled.button`
    background-color: transparent;
    color: teal;
    margin-right: 5px;
    border-radius: 10px;
    padding: 10px;
    border: 3px solid teal;
    cursor: pointer;

    &:hover {
        border-color: aqua;
        color: aqua;
    }
    &:last-child {
        margin-right: 0;
        margin-left: 10px;
    }
    &:first-child {
        margin-right: 10px;
        margin-left: 0;
    }
    &:disabled {
        color:#1f2833;
        border-color: #1f2833;
    }
`;
export const CurrentPageNumber = styled.button`
    color: beige;
    background-color: teal;
    margin-right: 5px;
    border-radius: 10px;
    padding: 10px;
    border: 3px solid teal;
    cursor: pointer;
`;

export const PagesNumbersWrap = styled.div`
    margin-top: 30px;
    display: flex;
`;
