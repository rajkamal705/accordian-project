import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import { FaSpinner } from 'react-icons/fa';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [localError, setLocalError] = useState('');
  const { registerUser, loading, error } = useRegister();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    // Clear any previous errors
    setLocalError('');

    registerUser(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
            minLength={6}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
            minLength={6}
          />

          {(localError || error) && (
            <p className="text-red-500 text-sm mb-4">{localError || error}</p>
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
                Signing Up...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;