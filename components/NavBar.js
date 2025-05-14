/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Nav className="btn-group">
          <Link passHref href="/">
            <Nav.Link>
              <button className="navbutton" type="button">
                Profile
              </button>
            </Nav.Link>
          </Link>
          <Link passHref href="/projects">
            <Nav.Link>
              <button className="navbutton" type="button">
                Projects
              </button>
            </Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
