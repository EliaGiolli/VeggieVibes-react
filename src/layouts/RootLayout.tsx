//ROUTES
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RootLayout() {

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <Navbar />
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout;
