import { Link } from 'react-router-dom'
import { LayoutGrid, Search, CircleUser, FileQuestion } from 'lucide-react'

function Sidebar() {
    return (
        <div className='flex flex-col gap-4 w-72 h-screen'>
            <div className='border-b border-gray-100 p-6'>
                <p className='text-3xl font-bold'>Project</p>
            </div>

            <div className='flex flex-col gap-8 p-6'>
                <Link to="/" className="flex gap-2 hover:cursor-pointer hover:text-blue-500 text-md"><LayoutGrid size={22} /> Home</Link>
                <Link to="/about" className="flex gap-2 hover:cursor-pointer hover:text-blue-500 text-md"><Search size={22} /> About</Link>
                <Link to="/contact" className="flex gap-2 hover:cursor-pointer hover:text-blue-500 text-md"><CircleUser size={22} />Contact</Link>
                <Link to="/accordion" className="flex gap-2 hover:cursor-pointer hover:text-blue-500 text-md"><FileQuestion size={22} />Accordian</Link>

            </div>

        </div>
    )
}

export default Sidebar
