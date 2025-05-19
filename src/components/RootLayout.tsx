// RootLayout.jsx
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { Menu, X } from 'lucide-react'

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex min-h-screen'>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50 md:hidden'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className='flex-1 bg-gray-100'>
        <div className='p-4'>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='rounded-lg p-2 hover:bg-gray-200 md:hidden'
          >
            {isSidebarOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default RootLayout