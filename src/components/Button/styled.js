import styled, { css } from 'styled-components';

import CoreIcon from '../Icon';

const colorsByVariant = (theme, variant) => css`
  color: ${theme.palette[variant].contrastText};
  background: ${theme.palette[variant].main};
`;

const getSizes = (theme, size) => {
  const sizeRatio = theme.button.sizeRatio[size];
  const paddingRatio = theme.button.paddingRatio[size];

  return css`
    font-size: ${14 * sizeRatio}px;
    padding: 0 ${10 * paddingRatio}px;
    line-height: ${36 * sizeRatio}px;
  `;
};

export const Wrapper = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.font.family};
  font-weight: 600;
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
