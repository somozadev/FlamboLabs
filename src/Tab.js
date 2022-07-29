import React from 'react'
import './Tab.css'
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';

function Tab(props) {
    return (
        <div className='tab-element'>
            <div className='tab-content'>

                <p className='title'>{props.content}</p>
                {/* <div className='icon'>
                    <DownloadIcon fontSize='2rem' top='-200px'/>
                </div> */}
            </div>
        </div>
    )
}

export default Tab