import React, { useState } from "react";

const Experience = ({onSubmit}) => {

    const [jobTitle, setJobTitle] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [city, setCity] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmite(e) {
        e.preventDefault()
        onSubmit({jobTitle, companyName, city, from, to, description})
        setJobTitle('')
        setCompanyName('')
        setCity('')
        setFrom('')
        setTo('')
        setDescription('')
    }

    function edit() {
        setJobTitle('')
        setCompanyName('')
        setCity('')
        setFrom('')
        setTo('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmite} className="expForm">
            <h3>Work Experience</h3>
            <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
            <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
            <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)}/>
            <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)}/>
            <textarea placeholder="Description" id="" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button type="submit" className="button">Add</button>
            <button onClick={edit} className="button">Edit</button>
        </form>
    )
}

export default Experience