import styled from 'styled-components'

const NavBar = styled.nav`
  background: #2b1472;
`

function Nav() {
  return (
  <NavBar className="sticky flex p-4 top-0">
    <ul>
      <li>
        <a href="#home"><i class="fa-solid fa-house fa-xl"></i></a>
      </li>
    </ul>
  </NavBar>
  );
}

export default Nav;