import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-green-800 text-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400 tracking-wide">
          VeggieVibes
        </Link>
        <ul className="flex gap-6 text-md font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 underline' : 'hover:text-yellow-300 transition-colors'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 underline' : 'hover:text-yellow-300 transition-colors'
              }
            >
              Ricette
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 underline' : 'hover:text-yellow-300 transition-colors'
              }
            >
              Lavora con noi
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
