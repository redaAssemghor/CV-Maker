import React, { useState } from "react";
// import '.../styles/generalInfo.css'

const GeneralInfo = ({onSubmit}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [professionalTitle, setProfessionalTitle] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')



    function handelSubmit(e) {
        e.preventDefault()
        onSubmit({firstName, lastName, professionalTitle, phoneNumber, email, address})
        setFirstName('')
        setLastName('')
        setProfessionalTitle('')
        setPhoneNumber('')
        setEmail('')
        setAddress('')
    }

    function edit() {
        setFirstName('')
        setLastName('')
        setProfessionalTitle('')
        setPhoneNumber('')
        setEmail('')
        setAddress('')
    }

    return (
        <form onSubmit={handelSubmit} className="infoForm">
            <h3>General Information</h3>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input type="text" placeholder="Professional Title" value={professionalTitle} onChange={(e) => setProfessionalTitle(e.target.value)}/>
            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <button type="submit" className="button">Add</button>
            <button onClick={edit} className="button">Edit</button>
        </form>
    )
}

export default GeneralInfo