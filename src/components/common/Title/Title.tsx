import { StyledTitle } from "./Title.styled";

type TitleType = {
    children: string;
};
function Title({ children }: TitleType) {
    return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
