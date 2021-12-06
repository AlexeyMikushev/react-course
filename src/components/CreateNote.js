import React, {Component, useState} from 'react'
import {Editor} from "./Editor";
import '../App.css';

 class CreateNote extends Component{

     constructor(props){
        super(props);
        var today = new Date;
        this.state={
            folder: '',
            title: '',
            date: '',
            text: ''
        }
    }

    handleUserInput = (e) => {
        console.log(e.target.value)
        this.setState({
            newTitle: e.target.value
        })
    }
     handleUserInput2 = (e1) => {
         console.log(e1.target.value)
         this.setState({
             newText: e1.target.value
         })
     }

    addNote = (props, e1) => {
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
                <form>
                    <div className="textBox">
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