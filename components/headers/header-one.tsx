import styled from 'styled-components';

export const HeaderOne = styled.h1`
  text-align: center;
  margin-top: 1rem;
  font-size: ${props => props.theme.global.headers.h1.fontSize};
  font-weight: ${props => props.theme.global.headers.h1.fontWeight};
  color: ${props => props.theme.current.headers.h1.color};
  margin-bottom: 1.5rem;
`;
