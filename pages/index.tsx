import type { NextPage } from 'next';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: ${props => props.theme.global.headers.h1.fontSize};
  font-size: ${props => props.theme.global.headers.h1.fontWeight};
`;

const Home: NextPage = () => {
  return (
    <StyledDiv>Home</StyledDiv>
  );
};

export default Home;
