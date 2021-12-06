import React, {useState} from "react";
// import {NoteBox} from "./NoteBox";
// import {NoteBox} from "./Form";
import '../App.css';

export function NewNote() {

    const [value, setValue] = useState('')

    return (
        <div>
            <button className="button_add" onClick ={(e) => createForm()}>
            +
            </button>
            <form>
                <div className="textBox">
                    <input
                        type= "text"
                        value = {value}
                        onChange={e=> setValue(e.target.value)}
                        className="textInput"
                        placeholder={'введите заголовок'}
                    />
                </div>
            </form>
        </div>

    )
    function createForm(){
           console.log(value)
        return(
            <div>
            </div>
        )
    }

}