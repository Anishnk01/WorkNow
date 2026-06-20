'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
import { RegisterModal } from '@/components/auth/RegisterModal';

export function Navbar() {
  const { user, isLoading, isAuthenticated, signOut } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              WorkNow
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {!isAuthenticated && !isLoading ? (
                <>
                  <button
                    onClick={() => setLoginOpen(true)}
                    className="text-gray-700 hover:text-gray-900 transition"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setRegisterOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Register
                  </button>
                </>
              ) : isLoading ? (
                <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {user?.avatar && (
                      <img
                        src={user.avatar}
                        alt="User avatar"
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {user?.fullName || 'User'}
                      </p>
                      <p className="text-xs text-gray-500">{user?.role || 'Member'}</p>
                    </div>
                  </div>
                  <button
                    onClick={signOut}
                    className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition text-sm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {!isAuthenticated && !isLoading ? (
                <>
                  <button
                    onClick={() => {
                      setLoginOpen(true);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setRegisterOpen(true);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Register
                  </button>
                </>
              ) : isLoading ? (
                <div className="px-4 py-2">
                  <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              ) : (
                <>
                  <div className="px-4 py-2">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.fullName || 'User'}
                    </p>
                    <p className="text-xs text-gray-500">{user?.role || 'Member'}</p>
                  </div>
                  <button
                    onClick={() => {
                      signOut();
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <RegisterModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} />
    </>
  );
}
