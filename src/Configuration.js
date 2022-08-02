import React from 'react'
import './Configuration.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Configuration(props) {
  
  return (
    <div className="configuration">
        <div className='config-tab-container'>
            <div className='config-tab-container-p'><p>Account configuration</p></div>
            <div className='config-tab'> <p>language</p><div className='config-tab-icon'> <ArrowForwardIosIcon/></div> </div>
            <div className='config-tab'> <p>e-mail</p><div className='config-tab-icon'> <ArrowForwardIosIcon/> </div></div>
            <div className='config-tab'> <p>phone number</p><div className='config-tab-icon'> <ArrowForwardIosIcon/> </div></div>
            
            <div className='config-tab-container-p'><p>Legal information</p></div>
            <div className='config-tab'> <p>licences</p> <div className='config-tab-icon'><ArrowForwardIosIcon/> </div></div>
            <div className='config-tab'> <p>terms and conditions</p> <div className='config-tab-icon'><ArrowForwardIosIcon/> </div></div>
        </div>
    </div>
  )
}

export default Configuration
