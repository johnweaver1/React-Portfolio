import "../styles/navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import github from "../images/github.svg";
import linkedIn from "../images/linkedin.svg";


export default function Navigation() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        John Weaver - Portfolio
      </a>
      <ul>
        <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://www.linkedin.com/in/john-weaver-b804451b8/"><img src={linkedIn}></img></a></li>
          <li><a href="https://github.com/johnweaver1"><img src={github}></img></a></li>
      </ul>
    </nav>
  )
}