// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import {Component} from "react";
import {Editor} from './components/Editor'
import {NewNote} from './components/NewNote'
import Notes from './components/Notes'
import CreateNote from "./components/CreateNote";
import CreateFolder from "./components/CreateFolder";
class Button extends Component {
  render() {
    return <button className="button_add" />
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
      ],
      folders: [
          { id: 1, folder:'New Folder'}
      ]
    }

  }
  addNote = (folder, title, date, text) =>{
    const CallBackState = this.state.notes;
    CallBackState.push({id: CallBackState.length + 1, folder: folder, title: title, date: date, text: text});
    this.setState({
      notes: CallBackState
    });
  }

  addFolder = (folder) =>{
    const CallBackState = this.state.folders;
    CallBackState.push({id: CallBackState.length + 1, folder: folder});
    this.setState({
      folders: CallBackState
    });
  }


  render() {
    return (
        <header className="header">
          <div className="header_inner">
            <div className="logo"> logo pic</div>
            <nav className="nav">
              <div className="nav_item"> Search pic</div>
              <a className="nav_item" href="#">about </a>
            </nav>
          </div>
        <div className="notes_body">
          <div className="folders">
            <div className="folders-title">Folders</div>
            <div>
              <CreateFolder addFolder={this.addFolder}/>
            {
              this.state.folders.map((folder) => {
                return (
                    <button className="folderButton" folder = {folder.folder}>
                      {folder.folder}
                      </button>
              )
              })
            }
            {/*<button className="folderButton"> New Folder(1)</button>*/}

            </div>
          </div>
          <div className="container">
            <div className="container-title">All Notes</div>
            <div className="App ">
              <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <div>
                  <div>
                    <CreateNote addNote={this.addNote}/>
                    {
                      this.state.notes.map((note) => {
                        return(
                            <Notes className="Notes"
                                   folder = {note.folder}
                                   title = {note.title}
                                   date = {note.date}
                                   text = {note.text}
                                   id = {note.id}
                                   key = {note.id}
                            />
                        )
                      })
                    }
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
        </header>
    );
  }
}

export default App;
