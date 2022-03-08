import styled from 'styled-components';

interface StyledSlotProps {
  theme: any,
  overlay: string,
}

export const StyledSlot = styled.div<StyledSlotProps>(props => ({
  width: '2em',
  height: '0.6em',
  backgroundColor: props.theme.colors.lightergrey,
  marginTop: '0.2em',
  marginBottom: '0.2em',
  borderRadius: '0.3em',
  position: 'relative',
  bottom: '1em',
  zIndex: 1,
  boxShadow: `inset 2em 0 0 0 ${props.overlay ? props.overlay : ''}24`,
}));
