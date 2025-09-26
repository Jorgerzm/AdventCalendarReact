import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 30px;
  animation: ${fadeIn} 1s ease-in; 
`;

