import React, { useState } from "react";

const Education = ({onSubmit}) => {

    const [degree, setDegree] = useState('')
    const [university, setUniversity] = useState('')
    const [major, setMajor] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit({degree, university, major})
        setDegree('')
        setUniversity('')
        setMajor('')
    }

    function edit() {
        setDegree('')
        setUniversity('')
        setMajor('')
    }

    return (
        <form onSubmit={handleSubmit} className="eduForm">
            <h3>Education</h3>
            <input type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)}/>
            <input type="text" placeholder="University" value={university} onChange={(e) => setUniversity(e.target.value)}/>
            <input type="text" placeholder="Major" value={major} onChange={(e) => setMajor(e.target.value)}/>
            <button type="submit" className="button">Add</button>
            <button onClick={edit} className="button">Edit</button>
        </form>
    )
}

export default Education