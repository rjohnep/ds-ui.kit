import styled, { keyframes } from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0;

  pre {
    margin: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
`;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: -28px;
  right: 0;
  padding: 4px;
  width: 50px;
  height: 25px;
  border: 0 none;
  border-radius: 5px;
  background: ${({ active }) => (active ? '#6ee6b6' : '#e6e6e6')};
  transition: background 0.3s;

  :hover {
    background: ${({ active }) => (active ? '#77dfad' : '#ccc')};
  }
`;

const activeFade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const CopyButton = styled(Button)`
  right: 60px;

  :active {
    animation: ${activeFade} 0.3s linear;
  }
`;
export const SourceButton = styled(Button)``;

export const Syntax = styled(SyntaxHighlighter)`
  position: relative;
  top: 10px;
`;
