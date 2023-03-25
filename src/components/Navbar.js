import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <div>Home</div>
      </Link>

      <Link to="/about">
        <div>About</div>
      </Link>
    </nav>
  );
}

export default Navbar;
