import { useState } from 'react'
import React from 'react'
import GeneralInfo from './components/cvBuilder/GeneralInfo'
import Experience from './components/cvBuilder/Experience'
import FullPreview from './components/Preview/fullPreview'
import Education from './components/cvBuilder/Education'
import Header from './components/header'
import './styles/styles.css'

const App = () => {
  const [infoData, setCvData] = useState('')
  const [expData, setExpData] = useState('')
  const [eduData, setEduData] = useState('')

    const handleFormSubmitInfo = (data) => {
        setCvData(data)
    }

    const handleFormSubmitExp = (data) => {
      setExpData(data)
    }

    const handleFormSubmitEdu = (data) => {
      setEduData(data)
    }

    return (
    <>
      <Header/>
      <div className='display'>
        <div className='inputSection'>
          <GeneralInfo onSubmit={handleFormSubmitInfo}/>
          <Experience onSubmit={handleFormSubmitExp}/>
          <Education onSubmit={handleFormSubmitEdu}/>
        </div>
        <div className='preview'>
          <FullPreview infoData={infoData} expData={expData} eduData={eduData}/>
        </div>
      </div>
    </>
    )
}

export default App