import styled from 'styled-components';

export const AppWrapper = styled.div`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  background-color: #fff;

  & > aside:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 240px;
    background-color: lightpink;

    footer {
      padding: 40px;
      border-top: 1px solid green;
    }
  }

  & > main {
    flex-grow: 1;
    background-color: lightskyblue;
    padding: 0 20px;
  }

  & > aside:last-child {
    width: 400px;
    background-color: lightgrey;
  }
`;