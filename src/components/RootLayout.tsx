import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function RootLayout() {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1 p-4 bg-gray-100'>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
