import styled from 'styled-components';

export const NavigationContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0 120px 0 120px;
    background: ${props => props.theme.current.navbar.background};
    transition: ${props => props.theme.global.themeTransition};
`;
