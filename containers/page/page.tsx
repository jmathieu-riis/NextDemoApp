import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import styled, { useTheme } from 'styled-components';

export const StyledPage = styled.div`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    height: 100vh;
    width: 100vw;
`;

const Page = ({ children }: {
    children: any;
}) => {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <StyledPage>
                {children}
            </StyledPage>
        </ThemeProvider>
    );
};

export default Page;
