import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Contact Us</h1>
      
      <p className="text-gray-700 mb-6">
        We'd love to hear from you! Please fill out the form below or reach us directly at
        <a href="mailto:support@example.com" className="text-blue-500 underline ml-1">support@example.com</a>.
      </p>

      <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
