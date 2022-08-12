import React from 'react'
import './Configuration.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import logo from './icon.png'
import firebaseApp from './Firebase'
import { singinWithGoogle } from './Firebase'
import { Link, useHistory } from 'react-router-dom';


const handleLogout = () => {
  firebaseApp.auth().signOut()
  window.location.reload(false);
}



function Configuration(props) {

  return (
    <div className="configuration">
      <div className='back-arrow'>
        <Link to={"/profile"} ><ArrowBackIosIcon fontSize='medium'/></Link>
      </div>
      <div className='config-tab-container'>
        <div className='config-tab-container-p'><p>Account configuration</p></div>
        <div className='config-tab'> <p>language</p><div className='config-tab-icon'> <ArrowForwardIosIcon /></div> </div>
        <div className='config-tab'> <p>e-mail</p><div className='config-tab-icon'> <ArrowForwardIosIcon /> </div></div>
        <div className='config-tab'> <p>phone number</p><div className='config-tab-icon'> <ArrowForwardIosIcon /> </div></div>

        <div className='config-tab-container-p'><p>Legal information</p></div>
        <div className='config-tab'> <p>licences</p> <div className='config-tab-icon'><ArrowForwardIosIcon /> </div></div>
        <div className='config-tab'> <p>terms and conditions</p> <div className='config-tab-icon'><ArrowForwardIosIcon /> </div></div>
        <div className='config-tab-logout' onClick={handleLogout}><Link to={"/home"} > <p>logout</p></Link></div>
        <div className='logo'> <img src={logo}></img> <p>version 0.0.1b </p></div>
        <div className='config-tab-deleteaccount'> <p>delete account</p></div>
      </div>
    </div>
  )
}

export default Configuration
