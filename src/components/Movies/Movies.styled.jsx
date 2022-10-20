import styled from '@emotion/styled';

export const MoviesContainer = styled.ul`
  padding-top: 20px;
`;
export const MoviesItem = styled.li`
  padding: 5px;
  color: ${({ theme }) => theme.color.default};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.active};
    color: ${({ theme }) => theme.color.primary};
  }
`;
