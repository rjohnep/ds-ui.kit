import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 0 20px;
  padding: 10px 0;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  margin: 0 0 10px;
  padding: 3px 5px;
  width: 100%;
  font-weight: 600;
  background: #f7f7f7;
  border-radius: 3px;
  ${({ required }) => required && 'color: red;'};
`;

export const Description = styled.div`
  width: 50%;
  padding: 3px 50px 3px 5px;
`;

export const Property = styled.code`
  width: 33%;
  color: rgb(96, 149, 235);
  padding: 3px 15px;
`;

export const DefaultValue = styled.div`
  display: flex;
  min-width: 5%;
  padding: 3px 15px;
  justify-content: center;
  align-items: center;
`;
