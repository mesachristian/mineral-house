import React from 'react';
import { useTranslation } from 'react-i18next';

// STYLES
import './styles.css';

const Navbar = () => {
    const { t } = useTranslation();

    const NAV_ITEMS_LEFT = [
        { label : 'lblHome', url : '/'},
        { label : 'lblAbout', url : '/about'},
        { label : 'lblSolutions', url : '/solutions'},
    ];

    const NAV_ITEMS_RIGHT = [
        { label : 'lblSignUp', url : '/signup'},
        { label : 'lblSignIn', url : '/login'}
    ];

    return (
        <header className='navbar'>
            <div className='nav-container'>
                <h1>MH</h1>
                <nav>
                    <ul className='nav-items'>
                    {NAV_ITEMS_LEFT.map((item, idx) => {
                        return(
                            <li className='navbar-logo' key={idx}>
                                <button className='mid-nav-item'>{t(item.label)}</button>
                            </li>  
                        );
                    })}
                    </ul>
                    
                </nav>

                <nav>
                    <ul className='nav-items'>
                        {NAV_ITEMS_RIGHT.map((item, idx) => {
                            return(
                            <li className='navbar-item' key={idx}>
                                <button className='right-nav-item' 
                                style={{ border : item.label === 'lblSignIn' ? '1px solid #1363DF' : 'none'}}>
                                    {t(item.label)}
                                </button>
                            </li>  
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

// 

export default Navbar;