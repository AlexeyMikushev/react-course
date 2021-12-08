import React, {useState} from "react";
import '../App.css'

function CreateFolder(props) {

    const [folder, setFolder] = useState('');
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setFolder(e.target.value);
            props.addFolder(folder)
            e.target.value = ''
        }
    }

    return (
        <div>
            <div className="textBoxFolders">
                <input
                    type="text"
                    onKeyDown={handleKeyDown}
                    className="textBoxFolders"
                    placeholder={'введите название папки'}
                />
            </div>
        </div>
    )
}

export default CreateFolder;