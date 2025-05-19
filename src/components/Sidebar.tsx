// Sidebar.jsx
import { Link } from 'react-router-dom'
import { Search, CircleUser, FileQuestion } from 'lucide-react'

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const links = [
    { to: "/", text: "Accordion", icon: <FileQuestion size={22} aria-hidden="true" /> },
    { to: "/about", text: "About", icon: <Search size={22} aria-hidden="true" /> },
    { to: "/contact", text: "Contact", icon: <CircleUser size={22} aria-hidden="true" /> }
  ];

  return (
    <nav
      className={`fixed md:relative inset-y-0 left-0 z-50 h-screen w-72 transform bg-white shadow-sm transition-transform duration-300 ease-in-out 
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
    >
      <div className='flex h-full flex-col gap-4'>
        <div className='border-b border-gray-200 p-6'>
          <h1 className='text-3xl font-bold'>Project</h1>
        </div>

        <div className='flex flex-col gap-2 p-4'>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg p-3 text-gray-700
                       transition-colors hover:bg-blue-50 hover:text-blue-600
                       text-md font-medium"
            >
              {link.icon}
              <span>{link.text}</span>
            </Link>
          ))}
        </div>

        {/* Login / Signup Buttons */}
        <div className="flex flex-col gap-2 p-4 border-t border-gray-200">
          <Link
            to="/login"
            onClick={onClose}
            className="w-full text-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={onClose}
            className="w-full text-center rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Signup
          </Link>

          <Link
            to="/forgot-password"
            onClick={onClose}
            className="w-full text-center rounded-lg text-sm text-gray-500 hover:underline mt-1"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar