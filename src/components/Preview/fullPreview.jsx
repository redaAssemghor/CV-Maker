import React from "react";
import Preview from "./Preview";
import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";


const FullPreview = ({infoData, expData, eduData}) => {

    return (
        <>
          <Preview data={infoData}/>
          <ExperiencePreview data={expData}/>
          <EducationPreview data={eduData}/>
        </>
    )
}

export default FullPreview