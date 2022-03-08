import styled from 'styled-components';

export const StyledSliderDot = styled.div(props => ({
  width: '1em',
  height: '1em',
  borderRadius: '0.5em',
  position: 'relative',
  left: props.theme.slider.position,
  zIndex: 2,
  backgroundColor: props.color,
  transition: 'left 50ms ease',
  boxShadow: `0px 0px 3px 2px ${props.color}16`,
}));
