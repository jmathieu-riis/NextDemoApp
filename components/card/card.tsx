import React from 'react';
import theme from '../../styles/theme';
import { StyledBody, StyledCard, StyledCardText, StyledCardTitle, StyledPreview } from './components';
import { CardOptions } from './interfaces';

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
