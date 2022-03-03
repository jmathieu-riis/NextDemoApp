import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Card from '../../components/card';
import CardOptions from '../../components/card/CardOptions';
import { HeaderOne } from '../../components/headers';
import theme from '../../styles/theme';

const StyledContainer = styled.div`
  max-width: ${props => props.theme.global.desktop.width};
  margin: auto;
`;

const StyledColumnarLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const StyledSection = styled.section`
  width: 100%;
`;


const ThemePage: NextPage = () => {
  const generateColorBlocks = () => {
    // @ts-ignore
    const colors = Object.keys(theme.colors).map(key => theme.colors[key]);
    const keys = Object.keys(theme.colors);
    return colors.map((color, index) => {
      const cardOptions = {
        title: keys[index],
        description: color,
        backgroundColorOverride: color,
      } as CardOptions;
      return (
        <Card key={color} options={cardOptions} />
      );
    });
  };
  return (
    <StyledContainer>
      <StyledSection>
        <HeaderOne>
          Colors
        </HeaderOne>
        <StyledColumnarLayout>
          {generateColorBlocks()}
        </StyledColumnarLayout>
      </StyledSection>
    </StyledContainer>
  );
};

export default ThemePage;
