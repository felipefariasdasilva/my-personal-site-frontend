import React, { useEffect, useState, useRef } from 'react'
import {
    Button,
    Input,
    TextField
} from '@material-ui/core';
import JoditEditor from 'jodit-react';
import { useHistory, useParams } from 'react-router-dom';
import useApi from '../../services/api'
import './style.css'

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        color: 'white'
    },
    input: {
        color: 'white'
    }
});

export default function EditArticle({theme}) {

    const classes = styles(theme)

    const params = useParams()
    const history = useHistory()
    const api = useApi()

    const [article, setArticle] = useState({})
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {
        const getArticleById = async () => {
            const json = await api.getArticleById(params.id)
            setArticle(json)
            setTitle(json.title)
            setText(json.text)
        }

        getArticleById()
    }, [])

    const editor = useRef(null)
	
	const config = {
		readonly: false
	}

    const handleUpdateArticle = async () => {
        let json = {}
        console.log(title)
        console.log(editor.current.value);
        console.log(params);

        if(title !== '' && editor.current.value !== ''){
            const body = { "title": title, "text": editor.current.value } 
            json = await api.updateArticle(params.id, body)
            history.push(`/article/${json.id}`)
        }
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

                        <TextField
                            className={classes.textField}
                            value={title}
                            placeholder="Title"
                            onChange={ e => setTitle(e.target.value)}
                            InputLabelProps={
                                {
                                    color: 'white'
                                }
                            }
                        />
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
                    tabIndex={2} // tabIndex of textarea
                    onBlur={handleBlur}
                    onChange={handleChange}
                />

            <br/>

            <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateArticle}
            >
                Atualizar
            </Button>

            <Button
                variant="contained"
                color="secondary"
                onClick={() => history.push("/articles")}
            >
                Cancelar
            </Button>

            <br />

        </div>
    )
}
