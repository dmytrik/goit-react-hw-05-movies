import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackBtn = styled(NavLink)`
  display: block;
  width: 40px;
  margin-top: 20px;
  margin-left: 50px;
  padding: 5px;
  border-radius: 8px;
  :hover {
    background-color: ${({ theme }) => theme.color.active};
    color: ${({ theme }) => theme.color.primary};
  }
`;
export const MoviePrimaryBox = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 0 50px;
  border-bottom: 2px solid ${({ theme }) => theme.color.border};
`;
export const MovieDescriptionBox = styled.div`
  padding-left: 20px;
`;

export const MovieInfoLink = styled(NavLink)`
  display: block;
  padding: 10px 0;
  cursor: pointer;
  width: 70px;
  margin-left: 50px;
  :hover {
    background-color: ${({ theme }) => theme.color.active};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const MovieAdditionalBox = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.color.border};
`;
export const ImgBox = styled.div``;
export const Img = styled.img``;
export const MovieTitle = styled.h1``;
export const TextInfo = styled.p``;
export const MovieDescriptionTitle = styled.h2``;
