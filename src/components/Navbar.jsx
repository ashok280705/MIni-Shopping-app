import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const HandleLogout = () => {
        navigate('/') 
    }
    return (
        <nav className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-600 p-4 shadow-lg w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold text-white animate-bounce">
                        <div className='bg-gradient-to-r from-amber-700 via-orange-400 to-red-600 bg-clip-text text-transparent'>Mini Shopping</div>
                    </h1>
                </div>
                
                <div className="flex items-center space-x-6">
                    <Link to="/app" className="text-white hover:text-amber-200 transition-colors">Home</Link>
                    <Link to="/app/cart" className="text-white hover:text-amber-200 transition-colors">Cart</Link>
                    <Link to="/app/orders" className="text-white hover:text-amber-200 transition-colors">Orders</Link>
                    <button 
                        className="bg-white text-amber-600 px-4 py-2 rounded-md hover:bg-amber-100 transition-colors" 
                        onClick={HandleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
