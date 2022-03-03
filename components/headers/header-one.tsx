import styled from 'styled-components';

export const HeaderOne = styled.h1`
  text-align: center;
  margin-top: 1rem;
  font-size: ${props => props.theme.global.headers.h1.fontSize};
  font-weight: ${props => props.theme.global.headers.h1.fontWeight};
  margin-bottom: 1.5rem;
`;
