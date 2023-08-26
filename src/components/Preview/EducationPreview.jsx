import React from "react";

const EducationPreview = (prop) => {
    const {degree, university, major} = prop.data
    return (
        <div className="eduPreview">
            <h1>Education</h1>
            <p>Degree : {degree}</p>
            <p>University : {university}</p>
            <p>Major : {major}</p>
        </div>
    )
}

export default EducationPreview