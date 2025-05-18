import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForgot } from '../hooks/useForgot';
import { FaSpinner } from 'react-icons/fa'; // for loading spinner

const ForgotPassword: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const navigate = useNavigate();
  const { loading, error, forgotUser, message } = useForgot();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle API call to send password reset link
    console.log('Reset request sent for:', identifier);
    forgotUser(identifier);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 mb-4 flex items-center space-x-1 hover:underline"
        >
          <span>&larr;</span>
          <span>Back</span>
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />

          {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
          {message && <p className="text-green-600 mb-2 text-sm">{message}</p>}
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold transition ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                verifying...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
