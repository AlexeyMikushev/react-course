import React from 'react'
import PropTypes from "prop-types"
import '../App.css'
// import { Icon, Label } from 'semantic-ui-react'

import '../App.css';
const Notes = (props) => {

    if (props.currentFolder === props.folder) {
        return (
            <div className="NoteField">
                <div className="Note">
                    <div className="NoteField">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="dateStamp">{props.date} </div>
                    {/*{props.title},*/}
                    {props.text}
                </div>
            </div>


        )
    }
    else
        return (
            <div>
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