import { Navbar, Nav } from 'react-bootstrap';
import { getCurrentUser, logoutUser } from '../helpers';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const profile = getCurrentUser();

  return profile ? (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">MyCharities Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/profile">My Profile</Nav.Link>
          <Nav.Link
            eventKey={2}
            onClick={() => {
              logoutUser();
              window.location.reload();
              return history.push('/login');
            }}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">MyCharities Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/profile">Login</Nav.Link>
          <Nav.Link eventKey={2} href="/signup">
            Signup
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
