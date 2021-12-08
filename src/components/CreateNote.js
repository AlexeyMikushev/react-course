import React, {Component} from 'react'
import '../App.css';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import './EditorConfig'


class CreateNote extends Component{
     constructor(props){
        super(props);
        this.state={
            folder: '',
            title: '',
            date: '',
            text: '',
            editor:'',
        }

    }

    handleUserInput = (e) => {
        this.setState({
            newTitle: e.target.value
        })
    }
     handleUserInput2 = (e1, editor) => {
         this.setState({
             newText: editor.getData(String)
         })
         this.setState({
             editor: editor
         })

     }

    addNote = (props, e1) => {
         if ((!this.state.newTitle || !this.state.newText)) {
             alert('Заголовок или заметка пустые!');
             return;
         }
        let today = new Date();
        let date = today.toLocaleDateString() + ' ' + today.toLocaleTimeString()
        this.props.addNote('New Folder',this.state.newTitle,date, this.state.newText)
        this.setState(
            {folder: '', title:'', date: '', text: '', newTitle: ''}
        );
        this.state.editor.setData('<p></p>')

    }

    render() {

        return (
            <div>
                <button className="button_add" onClick ={this.addNote}>
                    +
                </button>
                <form className="NoteEditForm">
                    <div className="textBoxNotes">
                        <input
                            type= "text"
                            value = {this.state.newTitle}
                            onChange={this.handleUserInput}
                            className="textInput"
                            placeholder={'введите заголовок'}
                        />
                    </div>
                    <div className="Editor">
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={this.handleUserInput2}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateNote;