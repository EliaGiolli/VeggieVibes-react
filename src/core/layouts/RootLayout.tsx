import { Outlet } from 'react-router-dom';

import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import ErrorBoundary from '../../shared/components/ErrorBoundary';

function RootLayout() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <Navbar />
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout;
