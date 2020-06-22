import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  position: relative;
  margin: 0 10px 40px;
`;

export const StoryTitle = styled.h3`
  display: flex;
  width: 100%;

  margin: 0 0 15px;
  padding: 15px 0;

  border-bottom: 2px #e3e3e3 solid;
`;

export const Doc = styled.div`
  margin: 0 0 20px;
  padding: 10px 0;
  border-top: 5px dotted #e3e3e3;
`;

export const Code = styled.code`
  padding: 3px;
  border-radius: 3px;
  color: #252525;
  background: #f7f7f7;
`;
