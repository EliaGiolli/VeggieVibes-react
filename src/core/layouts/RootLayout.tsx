import { Outlet } from 'react-router-dom';

import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import ErrorBoundary from '../../shared/components/ErrorBoundary';

function RootLayout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <a href="#main-content" className="skip-to-main">Skip to main content</a>
      <Navbar />
      <main id="main-content" className="pt-16 max-w-7xl mx-auto">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
