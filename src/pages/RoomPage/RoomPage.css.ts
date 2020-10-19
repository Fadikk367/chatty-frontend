import styled from'styled-components';

export const RoomPageWraper = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  max-height: 100vh;
  margin: auto;

  section:first-child {
    flex-grow: 1;
    background-color: lightskyblue;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
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