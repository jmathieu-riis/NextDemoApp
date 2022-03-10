import React, { useState } from 'react';
import { ToggleButton as ReactToggleButton } from 'react-bootstrap';
import styled from 'styled-components';
import { ButtonType, buttonTypeToColor } from '../interfaces';
import { StyledSliderDot, StyledSlot, StyledToggleButtonContainer } from './components';
import { observer } from 'mobx-react';
import store from '../../../store';

const HideMe = styled.div`display: none;`;

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
  const [slotOverlay, setSlotOverlay] = useState('');

  const handleChange = () => {
    onClick();
    if (value === 0) {
      setValue(1);
      setColor(store.theme.colors.success);
      setPosition('calc(1em + 1px)');
      setSlotOverlay(store.theme.colors.success);
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
        theme={{ ...store.theme, slider: { position: position } }}
      />
      <StyledSlot
        overlayColor={slotOverlay}
      >
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

export default observer(ToggleButton);
