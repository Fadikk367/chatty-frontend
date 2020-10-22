import styled from 'styled-components';

export const FormWrapper = styled.div`
  background-color: orange;
  display: flex;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  &:nth-child(1) {
    width: 200px;
  }

  &:nth-child(2) {

  }

  &:nth-child(3) {
    flex-grow: 1;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  & >:nth-child(1) {
    flex-grow: 1;
  }

  & >:nth-child(2) {
    width: auto;
  }
`;