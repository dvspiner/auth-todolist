import React from 'react';
import { NavLink } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-4 text-center font-semibold text-xl border-b border-blue-500">Dashboard</div>
        <nav className="flex-grow p-4 space-y-2">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `block p-2 rounded-md hover:bg-blue-500 ${isActive ? 'bg-blue-500' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `block p-2 rounded-md hover:bg-blue-500 ${isActive ? 'bg-blue-500' : ''}`
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `block p-2 rounded-md hover:bg-blue-500 ${isActive ? 'bg-blue-500' : ''}`
            }
          >
            Settings
          </NavLink>
        </nav>
        <div className="p-4 border-t border-blue-500">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md">
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-700">Welcome Back!</h2>
        </header>
        <section className="bg-white shadow-md rounded-lg p-6">
          {children}
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
