import styled from 'styled-components';

export const Wrapper = styled.svg`
  display: inline-block;
  fill: ${({ theme, variant }) =>
    variant ? theme.palette[variant].main : 'currentColor'};
  width: ${({ theme, size }) => theme.icon.size[size]};
  height: ${({ theme, size }) => theme.icon.size[size]};
`;
