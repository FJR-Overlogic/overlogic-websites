import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Overlogic</h1>
      </div>
      <ul>
        <li>
          {" "}
          <a href="#" target="_blank">
            Home
          </a>
        </li>
        <li>
          {" "}
          <a href="#" target="_blank">
            About
          </a>
        </li>
        <li>
          {" "}
          <a href="#" target="_blank">
            Contact
          </a>
        </li>
        <li id="github">
          <a href="https://github.com/FJR-Overlogic/overlogic-websites" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
