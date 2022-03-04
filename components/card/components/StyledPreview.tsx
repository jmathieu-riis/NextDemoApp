import styled from 'styled-components';

export const StyledPreview = styled.div`
  width: 100%;
  flex-grow: 3;
  background-color:${props => props.theme.cardBackground};
  border-radius: 4px 4px 0 0;
`;
