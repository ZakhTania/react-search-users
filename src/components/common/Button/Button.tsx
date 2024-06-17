import { ReactNode } from 'react';
import { StyledBtn } from './Button.styled';

type ButtonType = {
    children: ReactNode;
    props?: string[];
};

function Button({ children, ...props }: ButtonType) {
    return <StyledBtn {...props}>{children}</StyledBtn>;
}

export default Button;
