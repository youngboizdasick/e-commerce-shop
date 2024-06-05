import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Search, Bag, Bell } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Navbar = () => {
    const [menu, setActive] = useState('home');
    const [menuItems, setMenuItems] = useState([]);
    let url = 'https://fakestoreapi.com/products/categories';

    useEffect(() => {
        // Function to fetch menu data from the fake API
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(url);
                const cleanedMenuItems = response.data.map(item => item.replace("'s clothing", ""));
                setMenuItems(['home', ...cleanedMenuItems]);
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);
    return (
        <div className='navbar'>
            {/* Logo */}
            <div className='navbar-logo'>
                <h1>Haru</h1>
            </div>
            {/* Menu */}
            <ul className='navbar-menu'>
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => setActive(item)}>
                        <Link to={index === 0 ? '/' : `/${item}`}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                        {menu === item ? <hr /> : <></>}
                    </li>
                ))}
            </ul>
            {/* Search */}
            <div className='navbar-search'>
                <Search className='search-icon icon' />
                <input type='text' name='' id='' placeholder='Search for product ...' />
            </div>
            {/* Cart & Login Button */}
            <div className='navbar-right'>
                <Link>
                    <button className='bell-btn'>
                        <Bell className='bell-icon icon' />
                        <span className="bell-count">0</span>
                    </button>
                </Link>

                <Link to='/cart'>
                    <button className='cart-btn'>
                        <Bag className='cart-icon icon' />
                        <span className="cart-count">0</span>
                    </button>
                </Link>
                <Link to='auth'>
                    <button className='login-btn' type='button'>Login with Google</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar