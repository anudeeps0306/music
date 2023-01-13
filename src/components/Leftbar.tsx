import React from 'react'
import { Nav, NavItem } from "react-bootstrap";
import { FaHome, FaSearch, FaHeart, FaPlay } from "react-icons/fa";

type Props = {}

const Leftbar = (props: Props) => {
  return (
    <Nav className="flex-column">
    <NavItem>
      <Nav.Link href="#">
        <FaHome />
        Home
      </Nav.Link>
    </NavItem>
    <NavItem>
      <Nav.Link href="#">
        <FaSearch />
        Search
      </Nav.Link>
    </NavItem>
    <NavItem>
      <Nav.Link href="#">
        <FaHeart />
        Favourites
      </Nav.Link>
    </NavItem>
    <NavItem>
      <Nav.Link href="#">
        <FaPlay />
        Playlists
      </Nav.Link>
    </NavItem>
  </Nav>
  )
}

export default Leftbar;