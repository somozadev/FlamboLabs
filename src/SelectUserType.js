import { React } from 'react'
import './SelectUserType.css'
import { Link, useHistory } from 'react-router-dom';
import logo from './icon.png'

function SelectUserType(props) {
  const {hideHeader, setHideHeader} = props; 
  props.OnlyHideHeader();
  return (
      <>
      <img src={logo} className='header__logo' alt='logo'></img>
      <div className='selector-container'>
        <p> Continue as ...</p>
        <Link to={"/login"} className='link'><button className='select-button user-button'>  USER  </button></Link>
        <Link to={"/login"} className='link'><button className='select-button company-button'>  COMPANY  </button></Link>
      </div>
      </>
  )
}

export default SelectUserType