import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/recipes', label: 'Recipes', end: false },
  { to: '/work-with-us', label: 'Work with us', end: false },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-emerald-950 text-white shadow-lg z-50">
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-amber-400 tracking-wide hover:text-amber-300 transition-colors"
          aria-label="VeggieVibes — go to homepage"
        >
          <FaLeaf className="text-emerald-400 text-lg" aria-hidden="true" />
          VeggieVibes
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium" role="list">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5'
                    : 'text-stone-300 hover:text-amber-300 transition-colors'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-stone-300 hover:text-amber-400 hover:bg-emerald-900 transition-colors"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen
            ? <FaTimes size={20} aria-hidden="true" />
            : <FaBars size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-emerald-950 border-t border-emerald-800 px-4 pb-4 pt-2"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-amber-400 bg-emerald-900'
                        : 'text-stone-300 hover:text-amber-300 hover:bg-emerald-900'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
