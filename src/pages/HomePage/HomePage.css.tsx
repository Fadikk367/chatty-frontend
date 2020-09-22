import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const HomeColumn = styled.section`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeLeft = styled(HomeColumn)`
  background-color: #123c80;

  img {
    width: 90%;
  }
`;

export const HomeRight = styled(HomeColumn)`
  background-color: lightskyblue;
`;