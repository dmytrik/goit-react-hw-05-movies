import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderBox = styled.header`
  height: 60px;
  border: 2px solid ${({ theme }) => theme.color.border};
`;

export const Nav = styled.nav`
  margin-left: 30px;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  &:not(:first-of-type) {
    margin-left: 10px;
  }
`;

export const NavLinkNorm = styled(Link)`
  color: ${({ theme }) => theme.color.default};
  text-decoration: none;
  display: block;
`;
