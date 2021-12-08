import React, {Component, useState} from "react";
import '../App.css'



class CreateFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            folder: '',
        }
    }

    handleKeyDown = (e, props) => {
        if (e.key === 'Enter') {

            this.props.addFolder(e.target.value)
            this.setState(
                {folder: ''}
            );
            e.target.value = ''
        }
    }

    render() {

    let value = ''
        return (
            <div>
                <div className="textBoxFolders">
                    <input
                        type="text"
                        onKeyDown={this.handleKeyDown}
                        className="textBoxFolders"
                        placeholder={'введите название папки'}
                    />
                </div>
            </div>
        )
    }

}
export default CreateFolder;