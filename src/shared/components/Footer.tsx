import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaLeaf } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-emerald-950 text-stone-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaLeaf className="text-emerald-400 text-sm" aria-hidden="true" />
            <span className="text-lg font-bold text-amber-400" style={{ fontFamily: 'Lora, serif' }}>
              VeggieVibes
            </span>
          </div>
          <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
            Plant-based food for a healthier, greener world. Vibrant vegan and vegetarian recipes crafted with passion.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm" role="list">
            <li>
              <Link to="/" className="text-stone-300 hover:text-amber-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="text-stone-300 hover:text-amber-400 transition-colors">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/work-with-us" className="text-stone-300 hover:text-amber-400 transition-colors">
                Join Our Team
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors text-xl"
              aria-label="VeggieVibes on Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors text-xl"
              aria-label="VeggieVibes on Facebook"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors text-xl"
              aria-label="VeggieVibes on Twitter"
            >
              <FaTwitter aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-emerald-900">
        <p className="text-center text-xs text-stone-600">
          © {new Date().getFullYear()} VeggieVibes. Made with care for a greener planet.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
