import React from 'react';
import '../Styles/Components/Navbar.scss';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export function Navbar() {
  return (
    <div className='navbar'>
        <img className='navbar_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
        <div className="navbar_search">
            <input type="text" className="navbar_searchInput" />
            <SearchIcon className='navbar_searchIcon'/>
        </div>
        <div className="navbar_nav">
            <div className="navbar_option">
            <span className="option_LineOne">
                    Hello Guest
                </span>
                <span className="option_LineTwo">
                    Sign In
                </span>
            </div>
            <div className="navbar_option">
                <span className="option_LineOne">
                    Returns
                </span>
                <span className="option_LineTwo">
                    & Orders
                </span>
            </div>
            <div className="navbar_option">
                <span className="option_LineOne">
                    Your
                </span>
                <span className="option_LineTwo">
                    Prime
                </span>
            </div>
            <div className="navbar_optionBasket">
                <ShoppingBasketIcon />
                <span className="option_LineTwo navbar_basketCount">0</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar