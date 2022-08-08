import React from 'react'
import './Tab.css'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import { Link, useHistory } from 'react-router-dom'

function Tab(props) {
  const {
    content,
    CVdownload,
    CVupload,
    haslink1,
    haslink2,
    link1,
    link2,
    color,
  } = props

  return (
    <div className="tab-element" style={{ backgroundColor: color }}>
      <div className="tab-content">
        <div className='tab-content-text'>
          <p className="title">{content}</p>
          {haslink1 ? <a href={link1}>{link1}</a> : <></>}
          {haslink2 ? <a href={link2}>{link2}</a> : <></>}
        </div>

        {CVdownload ? (
          <div className="icon" >
            <Link to="/cv.pdf" target= "_blank" download><DownloadIcon fontSize="large" marginTop="-200px" /></Link>
          </div>
        ) : (
          <></>
        )}
        {/* <div className='icon'>
                    <DownloadIcon fontSize='2rem' top='-200px'/>
                </div> */}
      </div>
    </div>
  )
}

export default Tab
