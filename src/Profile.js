import React, { useState, useEffect } from 'react'
import Tab from './Tab'
import './Profile.css'
import { Link, useHistory } from 'react-router-dom'
import perfil from './profile2.png'
import { IconButton } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'

import EditIcon from '@mui/icons-material/Edit'
import SettingsIcon from '@mui/icons-material/Settings'
import firebaseApp from './Firebase'

function Profile() {
  // const persons = [
  //   {name: '',
  //   surname: '',
  //   email: '',
  //   phone:'',
  //   age:'',
  //   description: '',
  //   links: [],
  //   cv: '',
  //   img: ''}
  // ]

  const [person, setPerson] = useState([])
  useEffect(() => {
    const database = firebaseApp.firestore()
    const execute = database
      .collection('persons')
      .onSnapshot((snapshot) =>
        setPerson(snapshot.docs.map((doc) => doc.data())),
      )
    return () => {
      execute()
    }
  }, [])

  return (
    <>
      {person.map((person) => (
        <div className="profile-container">
          <div className="image-container">
            <div className="image-container-wrapper">
              <div className="image-content">
                <img src={perfil}></img>
              </div>
            </div>
          </div>
          <div className="short-info-container">
            <h1>{person.name + ' ' + person.surname} </h1>
            <h2> Web3 Programmer </h2>
          </div>
          <div className="edit-container">
            <div className="edit-element">
              <div className="edit-element-container">
                <Link to={"/configuration"}>
                  <IconButton>
                    <SettingsIcon fontSize="large" />
                  </IconButton>
                </Link>
              </div>
              <p>configuration</p>
            </div>
            <div className="edit-element">
              <div className="edit-element-container">
                <IconButton>
                  <EditIcon fontSize="large" />
                </IconButton>
              </div>
              <p>edit</p>
            </div>
          </div>

          <div className="stars-container">
            <StarIcon fontSize="large" marginTop="-200px" color="secondary" />
            <StarIcon fontSize="large" marginTop="-200px" color="secondary" />
            <StarIcon fontSize="large" marginTop="-200px" color="secondary" />
            <StarIcon fontSize="large" marginTop="-200px" color="secondary" />
            <StarHalfIcon
              fontSize="large"
              marginTop="-200px"
              color="secondary"
            />
            <p>({person.reviews})</p>
          </div>

          <div className="tabs-container">
            <Tab
              content={person.description}
              haslink1={true}
              haslink2={true}
              link1={'https://linkedin.com/lidyanielsen'}
              link2={'https://github.com/lidyanielsen'}
            />
            <Tab content={'CV'} CVdownload={true} color={'#905FDF'} />
          </div>
        </div>
      ))}
    </>
  )
}
export default Profile
