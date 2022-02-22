import React from 'react';
import styled from 'styled-components';

export const StyledPage = styled.div`
    background-color: ${props => props.theme.current.background};
    color: ${props => props.theme.current.color};
    height: 100vh;
    width: 100vw;
`;

const Page = ({ children }: {
    children: any;
}) => {
    return (
        <StyledPage>
            {children}
        </StyledPage>
    );
};

export default Page;
