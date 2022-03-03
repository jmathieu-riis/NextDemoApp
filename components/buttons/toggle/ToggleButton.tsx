import React, { useState } from 'react';
import { ToggleButton as ReactToggleButton } from 'react-bootstrap';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { ButtonType, buttonTypeToColor } from '../types';

const HideMe = styled.div`display: none;`;

const StyledToggleButtonContainer = styled.div(() => ({
  width: '2em',
  height: '1em',
  marginTop: 'auto',
  marginBottom: 'auto',
  cursor: 'pointer',
}));

const StyledSlot = styled.div(props => ({
  width: '2em',
  height: '0.6em',
  backgroundColor: props.theme.colors.lightergrey,
  marginTop: '0.2em',
  marginBottom: '0.2em',
  borderRadius: '0.3em',
  position: 'relative',
  bottom: '1em',
  zIndex: 1,
}));

const StyledSliderDot = styled.div(props => ({
  width: '1em',
  height: '1em',
  borderRadius: '0.5em',
  position: 'relative',
  left: props.theme.slider.position,
  zIndex: 2,
  backgroundColor: props.color,
  transition: 'left 50ms ease',
}));

const ToggleButton = (
  { id, buttonType, onClick }: {
    id: string;
    buttonType?: ButtonType;
    onClick: Function;
  }) => {

  const initialPosition = '-1px';
  const [value, setValue] = useState(0);
  const [color, setColor] = useState(buttonTypeToColor(buttonType));
  const [position, setPosition] = useState(initialPosition);

  const handleChange = () => {
    onClick();
    if (value === 0) {
      setValue(1);
      setColor(theme.colors.success);
      setPosition('calc(1em + 1px)');
    } else {
      setValue(0);
      setColor(buttonTypeToColor(buttonType));
      setPosition(initialPosition);
    }
  };

  return (
    <StyledToggleButtonContainer
      onClick={handleChange}
    >
      <StyledSliderDot
        color={color}
        theme={{ ...theme, slider: { position: position } }}
      />
      <StyledSlot>
        <HideMe>
          <ReactToggleButton
            type="checkbox"
            id={id}
            value={value}
            onChange={handleChange}
            checked={value === 1}
            style={{ display: 'none' }}
          />
        </HideMe>
      </StyledSlot>
    </StyledToggleButtonContainer>
  );
};

export default ToggleButton;
