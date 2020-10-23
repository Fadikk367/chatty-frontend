import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100vh;
  margin: auto;

  & >:nth-child(1) {
    width: 240px;
  }

  section:nth-child(2) {
    flex-grow: 1;
    background-color: lightskyblue;
  }

  section:nth-child(3) {
    width: 400px;
    background-color: lightgrey;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.3em;
  font-weight: 500;
  padding: 10px;
  border-bottom: 1px solid black;
  margin-bottom: 15px;
`;