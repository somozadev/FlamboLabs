import React, { useEffect, useRef, useState } from 'react'
import './HomeSearchBar.css'
import logo from '../icon.png'
import SearchIcon from '@mui/icons-material/Search'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import offer1 from './companyoffer1.png'
import company1 from './company.jpg'
import company2 from './company2.jfif'
import company3 from './company3.jpg'
import company4 from './company4.jpg'
import company5 from './company5.jpg'
import company6 from './company6.jfif'
import company7 from './company7.jpg'
import company8 from './company8.jpg'
import company9 from './company9.jpg'
import company10 from './company10.jfif'
import FindItem from './FindItem'
import { fabClasses } from '@mui/material'

var stringSimilarity = require('string-similarity')

const HomeSearchBar = (props) => {
  const finderThresholdValue = 0.35
  const [filter, setFilter] = useState(false)
  const OpenFilter = () => {
    setFilter(true)
  }
  const CloseFilter = () => {
    setFilter(false)
  }
  const [search, setSearch] = useState('')

  //startof similarity funct

  function similarity(s1, s2) {
    return stringSimilarity.compareTwoStrings(s1, s2)
  }
  function similarityByValues(s1, s2) {
    let returner = 0
    s2.map((element) => {
      if (
        stringSimilarity.compareTwoStrings(s1, element.toString()) >=
        finderThresholdValue
      ) {
        returner = stringSimilarity.compareTwoStrings(s1, element)
      }
    })
    return returner
  }

  const [hide, setHide] = useState([
    {
      offerTitle: 'Near web3 programmer',
      companyName: 'Nearests',
      companyLocation: 'United Kingdom',
      companyRequisite1: '2+ years of relevant experience.',
      companyRequisite2: 'Excellent knowledge of poo programming.',
      companyRequisite3:
        'Develop and support software, including apps, databases, interfaces and new funcionality enhancements.',
      companyRequisite4:
        'Experience in microservices architecture and REST API services.',
      companyExtraText: '',
      companyStars: 4,
      companyReviews: '4',
      companyImage: offer1,
      companySalary: '21k',
      hide: false,
      tags: ['programming', 'near', 'web3', 'uk', 'United Kingdom', 'software'],
    },
    {
      offerTitle: 'RRSS Manager',
      companyName: 'Flashing prod',
      companyLocation: 'Texas',
      companyRequisite1: '5+ projects of relevant impact.',
      companyRequisite2: 'Excellent knowledge of trending flows.',
      companyRequisite3:
        'Maintain and update social media accounts, program auto posting and telemetry tracking.',
      companyRequisite4: 'Experience in crypto, raffles and giveaways.',
      companyExtraText: '',
      companyStars: 2.5,
      companyReviews: '2',
      companyImage: company1,
      companySalary: '21k',
      hide: false,
      tags: [
        'twitter',
        'instagram',
        'marketing',
        'rrss',
        'Texas',
        'social media',
      ],
    },
    {
      offerTitle: 'Web3 Policy Researcher',
      companyName: 'Russell Tobin',
      companyLocation: 'New York',
      companyRequisite1:
        'Minimum one year of experience in a relevant field, preferably working on emerging technology.',
      companyRequisite2:
        'Ability to proactively lead and create research projects and agendas.',
      companyRequisite3: 'Excellent written and verbal communication skills.',
      companyRequisite4:
        'Demonstrated excellence in composition and analysis, with writing samples, academic or professional.',
      companyExtraText: '',
      companyStars: 4.5,
      companyReviews: '23',
      companyImage: company5,
      companySalary: '21k',
      hide: false,
      tags: [
        'writing',
        'analysis',
        'ny',
        'new york',
        'leadership',
        'composition',
      ],
    },
    {
      offerTitle: 'Tokenomics Analyst',
      companyName: 'Aradena',
      companyLocation: 'United States',
      companyRequisite1:
        'The purpose of this role is to assist in the creation of our games tokenomics.',
      companyRequisite2:
        'Model and calculate token financials, sensitivity, transaction amounts, supply, etc...',
      companyRequisite3:
        'Ability to express correctly in live AMAs about the project tokemonics.',
      companyRequisite4:
        'Helping to iterate the token economy over time to ensure sustainability over time to ensure sustainability.',
      companyExtraText: '',
      companyStars: 1.5,
      companyReviews: '48',
      companyImage: company7,
      companySalary: '',
      hide: false,
      tags: [
        'tokens',
        'ama',
        'iteration',
        'united states',
        'financials',
        'sensitivity',
      ],
    },
    {
      offerTitle: 'Data Analyst',
      companyName: 'MetaLife',
      companyLocation: 'Miami Fort Lauderdale',
      companyRequisite1:
        'Support effective decision-making through the company.',
      companyRequisite2:
        'Support the budgeting and reporting efforts for operating expense, capital and resource allocation.',
      companyRequisite3:
        'Design and coordinate the development of systems and tools.',
      companyRequisite4:
        'Prior experience can be replaced by strong work ethic and interest in the industry.',
      companyExtraText: '',
      companyStars: 5,
      companyReviews: '98',
      companyImage: company8,
      companySalary: '',
      hide: false,
      tags: ['data', 'analytics', 'miami', 'design', 'excel', 'python'],
    },
    // {
    //   offerTitle: '',
    //   companyName: '',
    //   companyLocation: '',
    //   companyRequisite1:
    //     '',
    //   companyRequisite2:
    //     '',
    //   companyRequisite3:
    //     '',
    //   companyRequisite4:
    //     '',
    //   companyExtraText: '',
    //   companyStars: 0,
    //   companyReviews: '',
    //   companyImage: null,
    //   companySalary: '',
    //   hide: true,
    //   tags: [''],
    // }
  ])

  //endof similarity funct
  const SearchFunction = () => {
    const newState = hide.map((obj) => {
      if (
        similarity(search, obj.offerTitle) >= finderThresholdValue ||
        similarity(search, obj.companyLocation) >= finderThresholdValue ||
        similarity(search, obj.companyName) >= finderThresholdValue ||
        similarityByValues(search, obj.tags) >= finderThresholdValue ||
        search == ''
      ) {
        return { ...obj, hide: false }
      } else return { ...obj, hide: true }
    })
    setHide(newState)
  }
  const onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      SearchFunction();
    }
  };


  return (
    <>
      {filter ? (
        <>
          {/* <div className="black-background"></div> */}
          <div className="filter-menu">
            <h1>Filters</h1>
            <div className="filter-group">
              <div className="filter-left-group">
                <p>Category</p>
                <p>Salary</p>
                <p>Location</p>
                <p>Blockchain</p>
              </div>
              <div className="filter-right-group">
                <div className="filter-dropdown">
                  <p> Programming </p>{' '}
                  <div className="filter-dropdown-icon">
                    <ArrowDropDownIcon fontSize="large" htmlColor="grey" />{' '}
                  </div>
                </div>
                <div className="filter-dropdown">
                  <p>21k - 40k </p>{' '}
                  <div className="filter-dropdown-icon">
                    <ArrowDropDownIcon fontSize="large" htmlColor="grey" />{' '}
                  </div>
                </div>
                <div className="filter-dropdown">
                  <p> Glasgow </p>{' '}
                  <div className="filter-dropdown-icon">
                    <ArrowDropDownIcon fontSize="large" htmlColor="grey" />{' '}
                  </div>
                </div>
                <div className="filter-dropdown">
                  <p> Solana </p>{' '}
                  <div className="filter-dropdown-icon">
                    <ArrowDropDownIcon fontSize="large" htmlColor="grey" />{' '}
                  </div>
                </div>
              </div>
            </div>
            <button onClick={CloseFilter}>Apply</button>
          </div>
        </>
      ) : (
        <div></div>
      )}
      <div className="home-search-bar-finder">
        <div className="form">
          <input
            // onKeyDown="return event.key != 'Enter';"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search-bar-input"
            onKeyDown={onKeyDownHandler}
          />
          <div className="search-icon" onClick={SearchFunction}>
            {/* <input type="submit" > */}
            <SearchIcon fontSize="large" />
            {/* </input> */}
          </div>
        </div>
      </div>
      <div className="home-search-bar-filter">
        <MoreHorizIcon fontSize="large" htmlColor="grey" onClick={OpenFilter} />
      </div>
      <div className="home-search-bar">
        {hide.map((findItems, index) => (
          <FindItem
            offerTitle={findItems.offerTitle}
            companyName={findItems.companyName}
            companyLocation={findItems.companyLocation}
            companyRequisite1={findItems.companyRequisite1}
            companyRequisite2={findItems.companyRequisite2}
            companyRequisite3={findItems.companyRequisite3}
            companyRequisite4={findItems.companyRequisite4}
            companyExtraText={findItems.companyExtraText}
            companyStars={findItems.companyStars}
            companyImage={findItems.companyImage}
            companySalary={findItems.companySalary}
            companyReviews={findItems.companyReviews}
            hide={findItems.hide}
            key={index}
          />
        ))}
        <div className="background-logo">
          <img src={logo} />
        </div>
      </div>
    </>
  )
}

export default HomeSearchBar
