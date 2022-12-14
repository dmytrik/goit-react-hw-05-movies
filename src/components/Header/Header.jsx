import { HeaderBox, Nav, NavList, NavItem, NavLinkNorm } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderBox>
        <Nav>
          <NavList>
            <NavItem>
              <NavLinkNorm to={'/'} end>
                Home
              </NavLinkNorm>
            </NavItem>
            <NavItem>
              <NavLinkNorm to={'/movies'}>Movies</NavLinkNorm>
            </NavItem>
          </NavList>
        </Nav>
      </HeaderBox>
    </>
  );
};
