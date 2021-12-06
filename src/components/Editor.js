import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic <- установка CKEditor
import React, {useState} from 'react';
import '../App.css';
import './CreateNote'
import {configure} from "@testing-library/react";
import './EditorConfig'

export function Editor(props) {
    // const [value, setValue] = useState(props.getText);
    let value = props.getText;
        const handleOnChange = (e, editor) => {
        value = editor.getData();
        }

    return (
        <div className="Editor">
            {/*<h1> Article</h1>*/}
            <CKEditor
                value = {value}
                editor={ClassicEditor}
                onChange={handleOnChange}
                />
            <div>

                {/*{value}*/}
            </div>

        </div>

    )
}