import { ReactNode } from 'react';
import { StyledBtn } from './Button.styled';

type ButtonType = {
    children: ReactNode;
    onClick: () => void;
    props?: string[];
};

function Button({ children, onClick, ...props }: ButtonType) {
    return <StyledBtn {...props} onClick={onClick}>{children}</StyledBtn>;
}

export default Button;
