import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import Home from "./Home";

function Header() {
    // console.log(useStateValue())
    // let basket =[]
    const data = useStateValue()
    console.log(data)
    let basket = []

    //  const[{basket},dispatch]=useStateValue();



    return (
        <div className="header">
            <Link to ='/home'  style={{textDecoration:"none"}}>
            <div className='header__logo'>
                <StorefrontIcon className='header__logoImage' fontSize='large' />
                <h2 className='header__logoTitle'>eShop</h2>

            </div>
            </Link>

            <div className='header__search'>
               <div> <input type='text' className='header__searchInput' /></div>
               <div><SearchIcon className='header__searchIcon' /></div>

            
            </div>

            <div className='header__nav'>

                <div className='nav__item'>
                    <span className='nav__itemLineOne'>Hello Guest</span>
                    <span className='nav__itemLineTwo'>Sign In</span>

                </div>

                <div className='nav__item'>
                    <span className='nav__itemLineOne'>Your</span>
                    <span className='nav__itemLineTwo'>Shop</span>
                </div>

                <Link to ='/checkout' style={{textDecoration:"none"}}>

                <div className='nav__item'>
                    <ShoppingBasketIcon className="itemBasket" />
                    <span className='nav_itemLineTwo nav__basketCount'>{basket.length}</span>


                </div>


                </Link>

               

            </div>
         


        </div>
    )
}
export default Header