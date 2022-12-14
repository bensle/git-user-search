import { MdOutlineFavorite } from 'react-icons/md';
import { MdOutlineHome } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <NavList role="list">
        <Link to="/">
          <NavListItem>
            <StyledHomeIcon />
          </NavListItem>
        </Link>
        <Link to="/favorites">
          <NavListItem>
            <StyledFavIcon />
          </NavListItem>
        </Link>
      </NavList>
    </Nav>
  );
}

const Nav = styled.nav`
  display: grid;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: var(--backgroundColor);
  opacity: 0.95;
  border-top: solid white 2px;
  height: 4rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  padding: 10px;
`;

const NavListItem = styled.li``;

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: red;
  }
`;

const StyledHomeIcon = styled(MdOutlineHome)`
  font-size: 3rem;
`;
const StyledFavIcon = styled(MdOutlineFavorite)`
  font-size: 3rem;
`;
