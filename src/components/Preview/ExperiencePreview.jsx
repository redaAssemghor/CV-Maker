import React from "react";

const ExperiencePreview = (prop) => {
    const {jobTitle, companyName, city, from, to, description} = prop.data
    return (
        <>
            <h1>Experience</h1>
            <p>Job Title : {jobTitle}</p>
            <p>Company Name : {companyName}</p>
            <p>City : {city}</p>
            <p>From : {from}</p>
            <p>To : {to}</p>
            <p>Description : {description}</p>
        </>
    )
}

export default ExperiencePreview