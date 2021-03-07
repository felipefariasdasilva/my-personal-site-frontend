import React, {useState, useRef} from 'react'
import {
    Button,
    Input
} from '@material-ui/core';
import useApi from '../../services/api'
import './style.css'
import { useHistory } from 'react-router-dom';
import JoditEditor from 'jodit-react';

export default function NewArticle() {

    const api = useApi()
    const history = useHistory()

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handlePublishArticle = async () => {
        let json = {}
        if(title !== '' && editor.current.value !== ''){
            const body = { "title": title, "text": editor.current.value } 
            json = await api.createArticle(body)
            history.push(`/article/${json.id}`)
        }
    }

    const editor = useRef(null)
	
	const config = {
		readonly: false
	}

    const handleBlur = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }
        
    const handleChange = (editorNewValue) => {
        editor.current.value = editorNewValue;
    }

    return( 

        <div className="new-article">

                <div className="article-infos">

                    <div className="article-item">               
                        <Input 
                            placeholder="Title"
                            onChange={ e => setTitle(e.target.value)}/>
                    </div>
                    
                    <div className="article-item">
                        <Input
                            placeholder="Description"
                        />
                    </div>
                   
                </div>

                <br/><br/><br/>

                <JoditEditor
                    ref={editor}
                    name='content'
                    value={text}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={handleBlur}
                    onChange={handleChange}
                />

            <br/>

            <Button
                variant="contained"
                color="primary"
                onClick={handlePublishArticle}
            >
                Publicar
            </Button>

            <br />

        </div>
    )
}
