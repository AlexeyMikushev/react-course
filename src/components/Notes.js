import React from 'react'
import PropTypes from "prop-types"
import '../App.css'
import parse from 'html-react-parser'
import '../App.css';



const Notes = (props) => {

    if (props.currentFolder === props.folder) {
        return (
            <div className="NoteField">
                <div className="Note">
                    <div className="NoteField">
                        <div className ="TitleOfNote">{props.title}
                        </div>
                    </div>
                    <div className="DateStamp">{props.date} </div>
                    <div className="TextOfNote">{parse(props.text)}</div>
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