import { ReactNode } from 'react';
import { StyledContainer, StyledWrap } from './Wrapper.styled';

type WrapperType = {
    children: ReactNode;
};

function Wrapper({ children }: WrapperType) {
    return (
        <StyledWrap>
            <StyledContainer>{children}</StyledContainer>
        </StyledWrap>
    );
}

export default Wrapper;
