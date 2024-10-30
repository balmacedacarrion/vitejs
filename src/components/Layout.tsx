import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Package, User, LogOut, Settings, Search } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Layout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Package className="h-6 w-6 mr-2" />
                <span className="font-semibold">Order Management</span>
              </Link>

              <Link
                to="/track"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <Search className="h-5 w-5 mr-2" />
                <span>Track Order</span>
              </Link>
            </div>

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">{user.name}</span>
                </div>
                {user.role === 'admin' && (
                  <Link
                    to="/settings"
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Settings className="h-5 w-5 text-gray-500" />
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <LogOut className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            ) : (
              location.pathname !== '/login' && (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Register
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}