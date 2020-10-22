import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  margin: auto;

  section:first-child {
    flex-grow: 1;
    background-color: lightskyblue;
  }

  section:nth-child(2) {
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