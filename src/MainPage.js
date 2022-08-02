import { React, useContext } from 'react'
import './MainPage.css'
import logo from './icon.png'
import AppContext from './AppContext';
import { IconButton } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

function MainPage(props) {
  return (
    <div className='MainPage'>
      <Link to={"/"}>
        <IconButton>      
          <img src={logo} className='main_logo' alt='logo' onClick={props.toggleHideNavbar}></img>
        </IconButton>
      </Link>
      <p>FlamboLabs</p>
    </div>
  )
}

export default MainPage