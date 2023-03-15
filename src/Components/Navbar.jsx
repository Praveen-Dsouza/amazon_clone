import React from 'react';
import '../Styles/Components/Navbar.scss';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import InputField from './Common/InputField';
// import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className='navbar'>
        {/* <Link to="/"> */}
            <img className='navbar_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
        {/* </Link> */}
        <div className="navbar_search">
            <InputField type='text' class='navbar_searchInput' />
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
            
            {/* <Link to="/checkout"> */}
                <div className="navbar_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="option_LineTwo navbar_basketCount">0</span>
                </div>
            {/* </Link> */}
        </div>
    </div>
  )
}

export default Navbar