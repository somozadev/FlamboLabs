import React, { useEffect, useRef, useState } from 'react'
import './FindItem.css'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import FiveHollowStars from './FiveHollowStars'
import FourHollowStarsOneHalfStar from './FourHollowStarsOneHalfStar'
import FiveStars from './FiveStars'
import OneHollowStarsFourStar from './OneHollowStarsFourStar'
import OneHollowStarsFourStarOneHalfStar from './OneHollowStarsFourStarOneHalfStar'
import TwoHollowStarsThreeStar from './TwoHollowStarsThreeStar'
import TwoHollowStarsTwoStarOneHalfStar from './TwoHollowStarsTwoStarOneHalfStar'
import OneHollowStarsThreeStarOneHalfStar from './OneHollowStarsThreeStarOneHalfStar'
import ThreeHollowStarsTwoStar from './ThreeHollowStarsTwoStar'
import ThreeHollowStarsOneStarOneHalfStar from './ThreeHollowStarsOneStarOneHalfStar'
import FourHollowStarsOneStar from './FourHollowStarsOneStar'

const FindItem = (props) => {
  const {
    offerTitle,
    companyName,
    companyLocation,
    companyRequisite1,
    companyRequisite2,
    companyRequisite3,
    companyRequisite4,
    companyExtraText,
    companyStars,
    companyReviews,
    companyImage,
    companySalary,
    hide,
  } = props

  const [applied, setApplied] = useState(false)
  const applyButtonClick = () => {
    let boolean = !applied
    setApplied(boolean)
  }
  let classnameextra = applied ? ' find-item-applied' : ''
  return (
    <>
      {hide ? (
        <></>
      ) : (
        <>
          <div className={'find-item ' + hide + classnameextra}>
            <div className="find-item_image">
              <img src={companyImage} />
              {/* companyImage */}
            </div>
            <div className="find-item_content">
              <div className="find-item_content-header">
                <h2>{offerTitle}</h2>
                <h5>
                  {companyName} | {companyLocation}
                </h5>
                {/* companyLocation */}
              </div>
              <div className="find-item_content-list">
                <ul>
                  <li>{companyRequisite1}</li>
                  <li>{companyRequisite2}</li>
                  <li>{companyRequisite3}</li>
                  <li>{companyRequisite4}</li>
                </ul>
              </div>
              <div className="find-item_content-footer">
                <div className="stars-container">
                  {companyStars === 5 ? (
                    <>
                      <FiveStars />
                    </>
                  ) : (
                    <>
                      {companyStars === 4.5 ? (
                        <>
                          <OneHollowStarsFourStarOneHalfStar />
                        </>
                      ) : (
                        <>
                          {companyStars === 4 ? (
                            <>
                              <OneHollowStarsFourStar />
                            </>
                          ) : (
                            <>
                              {companyStars === 3.5 ? (
                                <>
                                  <OneHollowStarsThreeStarOneHalfStar />
                                </>
                              ) : (
                                <>
                                  {companyStars === 3 ? (
                                    <>
                                      <TwoHollowStarsThreeStar />
                                    </>
                                  ) : (
                                    <>
                                      {companyStars === 2.5 ? (
                                        <>
                                          <TwoHollowStarsTwoStarOneHalfStar />
                                        </>
                                      ) : (
                                        <>
                                          {companyStars === 2 ? (
                                            <>
                                              <ThreeHollowStarsTwoStar />
                                            </>
                                          ) : (
                                            <>
                                              {companyStars === 1.5 ? (
                                                <>
                                                  <ThreeHollowStarsOneStarOneHalfStar />
                                                </>
                                              ) : (
                                                <>
                                                  {companyStars === 1 ? (
                                                    <>
                                                      <FourHollowStarsOneStar />
                                                    </>
                                                  ) : (
                                                    <>
                                                      {companyStars === 0.5 ? (
                                                        <>
                                                          <FourHollowStarsOneHalfStar />
                                                        </>
                                                      ) : (
                                                        <>
                                                          <FiveHollowStars />
                                                        </>
                                                      )}
                                                    </>
                                                  )}
                                                </>
                                              )}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                  <p>({companyReviews})</p>
                </div>
                <div className="find-item_content-footer_apply">
                  <button
                    onClick={applyButtonClick}
                    className={applied ? 'redbutton' : ''}
                  >
                    {applied ? <p>Unapply</p> : <p>Apply</p>}
                  </button>
                </div>
              </div>
              <div className="read-more">
                <p>Read More...</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default FindItem
