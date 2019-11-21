import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  grid-auto-rows: minMax(20px, auto);
`;

export const Title = styled.div`
  grid-column: 1;
`;

export const Release = styled.div`
  grid-column: 2;
`;
