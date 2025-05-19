import React from 'react';

const About: React.FC = () => {
  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">About This Project</h1>
      <p className="text-gray-700 mb-4">
        This project is a simple and reusable <strong>Accordion component</strong> built with React and TypeScript.
      </p>
      <p className="text-gray-700 mb-4">
        The Accordion allows users to expand and collapse sections of content, making it useful for FAQs, menus,
        or any content that benefits from being grouped in toggleable panels.
      </p>
      <p className="text-gray-700">
        The goal of this project is to demonstrate clean and accessible UI design using modern tools like
        <strong> React, TypeScript, and Tailwind CSS</strong>.
      </p>
    </div>
  );
};

export default About;
