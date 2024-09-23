import Link from "next/link";
import "./navbar-styles.css";

export function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link className='text-link' href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='text-link' href='/about'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
