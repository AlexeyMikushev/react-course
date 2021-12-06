import React from 'react'
import PropTypes from "prop-types"

import '../App.css';
const Notes = (props) => {
    return (

        <div className="Note">
           <h1>{props.title}</h1>
            <h2>{props.date} </h2>
            {/*{props.title},*/}
            {props.text}
        </div>

    )
}
Notes.propTypes = {
    folder: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string
}

export default Notes;