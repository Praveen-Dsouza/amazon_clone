import React from 'react';
import '../Styles/Components/Navbar.scss';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import InputField from './Common/InputField';
import { useStateValue } from '../Utils/StateProvider';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

export function Navbar() {

  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
        auth.signOut();
    }
  }

  return (
    <div className='navbar'>
        <Link to="/">
            <img title='home' className='navbar_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
        </Link>
        <div className="navbar_search">
            <InputField type='text' class='navbar_searchInput' />
            <SearchIcon className='navbar_searchIcon'/>
        </div>
        <div className="navbar_nav">
            <Link style={{ textDecoration: 'none' }} to={!user && '/login'}>
                <div onClick={handleAuth} className="navbar_option">
                    <span className="option_LineOne">
                        Hello {user? user?.email : 'Guest'}
                    </span>
                    <span className="option_LineTwo">
                        { user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>
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
            
            <Link title='cart' style={{ textDecoration: 'none' }} to="/checkout">
                <div className="navbar_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="option_LineTwo navbar_basketCount">{cart?.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar