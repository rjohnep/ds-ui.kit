import styled, { css } from 'styled-components';

import CoreIcon from '../Icon';

const colorsByVariant = (theme, variant) => css`
  color: ${theme.palette[variant].contrastText};
  background: ${theme.palette[variant].main};
`;

const getSizes = ({ button }, size) => {
  const sizeRatio = button.sizeRatio[size];
  const paddingRatio = button.paddingRatio[size];

  return css`
    font-size: ${button.fontSizeBase * sizeRatio}px;
    padding: 0 ${button.paddingBase * paddingRatio}px;
    line-height: ${button.lineBase * sizeRatio}px;
  `;
};

export const Wrapper = styled.button`
  /* //demo styles */
  margin: 0 0 20px;

  cursor: pointer;

  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.button.fontWeightBase};
  border: 0 none;
  border-radius: 5px;
  transition: opacity 0.3s;

  ${({ theme, size }) => getSizes(theme, size)};
  ${({ theme, variant }) => colorsByVariant(theme, variant)};
  ${({ theme, shadowed }) =>
    shadowed && `box-shadow: ${theme.elevation.xLarge};`};

  &:hover {
    opacity: 0.7;
  }
`;

export const Icon = styled(CoreIcon)`
  ${({ reverse }) =>
    reverse ? 'margin:0 -5px 0 5px;' : 'margin: 0 5px 0 -5px;'};
`;
