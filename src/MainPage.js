import { React, useContext } from 'react'
import './MainPage.css'
import logo from './icon.png'
import { IconButton } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

function MainPage(props) {
  const {hideHeader, setHideHeader} = props; 
  props.OnlyHideHeader();
  return (
    <div className='MainPage' onClick={props.OnlyUnHideHeader}>
      <Link to={"/home"}> 
          <img src={logo} className='main_logo' alt='logo' ></img>
      </Link>
      <p>FlamboLabs</p>
    </div>
  )
}

export default MainPage