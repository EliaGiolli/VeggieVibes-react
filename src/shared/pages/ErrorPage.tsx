import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';

function ErrorPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center text-center px-6 py-20">
      <FaLeaf className="text-emerald-200 text-6xl mb-6" aria-hidden="true" />
      <p className="text-8xl font-bold text-stone-200 mb-2 leading-none" aria-hidden="true">
        404
      </p>
      <h1 className="text-2xl font-bold text-stone-800 mb-3">Page Not Found</h1>
      <p className="text-stone-500 max-w-sm mb-10 leading-relaxed">
        Looks like this page wandered off into the garden. Let's get you back on track.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-7 py-3 rounded-xl transition-all active:scale-[0.97]"
      >
        <FaLeaf aria-hidden="true" />
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
