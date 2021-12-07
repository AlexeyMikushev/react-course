import React, {Component, useState} from 'react'
import {Editor} from "./Editor";
import '../App.css';

 class CreateNote extends Component{

     constructor(props){
        super(props);
        this.state={
            folder: '',
            title: '',
            date: '',
            text: ''
        }
    }

    handleUserInput = (e) => {
        this.setState({
            newTitle: e.target.value
        })
    }
     handleUserInput2 = (e1) => {
         this.setState({
             newText: e1
         })
     }

    addNote = (props, e1) => {
         if (this.state.newTitle.length==0 || this.state.text.newText==0) {
             alert('Заголовок или заметка пустая!');
             return;
         }
        let today = new Date();
        let date = today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear() + " " + today.getHours() + ":"+ today.getMinutes();
        this.props.addNote('New Folder',this.state.newTitle,date, this.state.newText)
        this.setState(
            {folder: '', title:'', date: '', text: ''}
        );
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

                    <Editor className = "Editor1" getText = {this.state.newText} onChange={this.handleUserInput2}/>
                </form>
            </div>
        )
    }
}
export default CreateNote;