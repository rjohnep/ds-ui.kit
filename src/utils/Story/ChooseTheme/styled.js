import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ccc;
  height: 48px;
  padding: 10px;
  border-radius: 5px;
  margin: 0 0 30px;
`;

export const Theme = styled.button`
  cursor: pointer;
  margin: 0 5px;
  padding: 3px 5px;
  border: 0 none;
  color: #fff;
  /* font-weight: 600; */
  font-size: 14px;
  background: #a9b2ac;
  border-radius: 5px;
  text-transform: capitalize;

  ${({ active }) => active && 'background: #898980;'};
`;
