import { StyledHeading } from "./Heading.styled";

type HeadingType = {
    children: string;
};
function Heading({ children }: HeadingType) {
    return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;
