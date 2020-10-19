import styled from 'styled-components';

export const LandingPageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const LandingColumn = styled.section`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LandingLeft = styled(LandingColumn)`
  background-color: #123c80;

  img {
    width: 90%;
  }
`;

export const LandingRight = styled(LandingColumn)`
  background-color: lightskyblue;
`;