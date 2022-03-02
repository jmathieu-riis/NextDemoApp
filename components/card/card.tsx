import React from 'react';
import { Card as ReactCard } from 'react-bootstrap';
import styled from 'styled-components';
import theme from '../../styles/theme';
import CardOptions from './CardOptions';

const StyledCard = styled(ReactCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  min-height: 180px;
  margin: 1rem 1rem;
  box-shadow: 0px 0px 4px 2px ${props => props.theme.colors.darkgrey + '22'};
  border-radius: 4px;
`;

const StyledPreview = styled.div`
  width: 100%;
  flex-grow: 3;
  background-color:${props => props.theme.cardBackground};
  border-radius: 4px 4px 0 0;
`;

const StyledBody = styled(ReactCard.Body)`
  border-radius: 0 0 4px 4px;
`;

const StyledCardTitle = styled(ReactCard.Title)`
  font-size: ${props => props.theme.global.headers.h3.fontSize};
  font-weight: ${props => props.theme.global.headers.h3.fontWeight};
  text-align: center;
`;

const StyledCardText = styled(ReactCard.Text)`
  font-size: ${props => props.theme.global.paragraph.fontSize};
  font-weight: ${props => props.theme.global.paragraph.fontWeight};
  padding-left: 0.5rem;
`;


const Card = ({ options }: { options: CardOptions; }) => {
  let modifiedTheme = {
    ...theme,
    cardBackground: theme.current.background,
  };
  if (options.backgroundColorOverride !== null && options.backgroundColorOverride !== undefined) {
    modifiedTheme = {
      ...modifiedTheme,
      cardBackground: options.backgroundColorOverride,
    };
  }
  return (
    <StyledCard>
      <StyledPreview
        theme={modifiedTheme}
      />
      <StyledBody>
        <StyledCardTitle>
          {options.title}
        </StyledCardTitle>
        <StyledCardText>
          {options.description}
        </StyledCardText>
      </StyledBody>
    </StyledCard>
  );
};

export default Card;
