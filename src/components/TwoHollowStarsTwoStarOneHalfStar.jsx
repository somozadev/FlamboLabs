import React, { useEffect, useRef, useState } from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'

const TwoHollowStarsTwoStarOneHalfStar = () => {
  return (
    <>
                  <StarIcon
                    fontSize="small"
                    marginTop="-200px"
                    color="secondary"
                  />
                  <StarIcon
                    fontSize="small"
                    marginTop="-200px"
                    color="secondary"
                  />
                  <StarHalfIcon
                    fontSize="small"
                    marginTop="-200px"
                    color="secondary"
                  />
                  <StarBorderIcon
                    fontSize="small"
                    marginTop="-200px"
                    color="secondary"
                  />
                  <StarBorderIcon
                    fontSize="small"
                    marginTop="-200px"
                    color="secondary"
                  />
                
    </>
  )
}

export default TwoHollowStarsTwoStarOneHalfStar
