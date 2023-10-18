import styled from 'styled-components';

export const Container = styled.div<{ $maxWidth: number }>`
  max-width: ${(props) => props.$maxWidth}rem;
  padding: 0 2rem;
`;
