import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin'; // adjust path if needed
import { FaSpinner } from 'react-icons/fa'; // for loading spinner

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const { loginUser, loading, error } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setLocalError('Please fill in all fields.');
      return;
    }

    setLocalError('');
    loginUser({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />
          {(localError || error) && (
            <div className='flex justify-between'>
              <p className="text-red-500 text-sm mb-4">{localError || error}</p>
              <Link to="/forgot-password" className='flex justify-end'>
                <p className='text-sm text-blue-600 hover:cursor-pointer'>Forgot Password ?</p>
              </Link>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold transition ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
