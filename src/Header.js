import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'; import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import logo from './icon.png'
import { IconButton } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import AppContext from './AppContext';

function Header(props) {
    const { user, setUser } = props;
    return (

        < div className='header' >
            {
                user ? (<Link to={"/profile"} >
                    <IconButton>
                        <PersonIcon className='header__icon' fontSize='large' />
                    </IconButton>
                </Link>) : (<Link to={"/home"}><IconButton disabled={true}><PersonIcon className='header__icon' fontSize='large' /></IconButton></Link>)
            }


            <Link to={"/home"}>
                <IconButton>
                    <img src={logo} className='header__logo' alt='logo'></img>
                </IconButton>
            </Link>
            <Link to={"/menu"}>
                <IconButton>
                    <HomeIcon className='header__icon' fontSize='large' />
                </IconButton>
            </Link>
        </div >
            
        

    )
}

export default Header