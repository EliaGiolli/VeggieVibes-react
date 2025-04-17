import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaLeaf } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-green-900 text-zinc-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaLeaf className="text-yellow-400" />
            <h2 className="text-xl font-semibold text-yellow-400">VeggieVibes</h2>
          </div>
          <p className="text-sm text-zinc-300">
            Plant-based food for a healthier, greener world. Explore vibrant vegan and vegetarian recipes crafted with passion.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/recipes" className="hover:underline">Recipes</Link></li>
            <li><Link to="/work" className="hover:underline">Join Our Team</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Follow Us</h3>
          <div className="flex gap-4 text-xl text-zinc-300">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-zinc-400 mt-6 border-t border-zinc-700 pt-4">
        © {new Date().getFullYear()} VeggieVibes. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
