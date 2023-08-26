import React from "react";

const Preview = (prop) => {
    const {firstName, lastName, professionalTitle, phoneNumber, email, address} = prop.data
    return (
        <div className="infoPreview">
            <h1 className="title">General Information</h1>
            <h2>{firstName} {lastName}</h2>
            <p>Professional Title : {professionalTitle}</p>
            <p>Phone Number : {phoneNumber}</p>
            <p>Email : {email}</p>
            <p>Address : {address}</p>
        </div>
    )
}

export default Preview