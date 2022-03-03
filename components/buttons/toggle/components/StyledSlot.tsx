import styled from 'styled-components';

export const StyledSlot = styled.div(props => ({
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
