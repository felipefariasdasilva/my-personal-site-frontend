import React, {useEffect, useState} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    Button,
    Fab,
    IconButton,
} from '@material-ui/core';
import useApi from '../../services/api'
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css'
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';
import HomeIcon from '@material-ui/icons/Home';
import VisibilityIcon from '@material-ui/icons/Visibility';

function ArticleList() {

    const [id, setId] = useState('')
    const [articles, setArticles] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(true)

    const api = useApi()

    useEffect(() => { getArticles() }, [])

    const getArticles = async () => {
        setLoading(true)
        const json = await api.getArticles()
        if (json) {
            setArticles(json)
        }
        setLoading(false)
    } 

    const handleClickDelete = async (id) => {
        await api.deleteArticle(id)
        getArticles()
    }

    const handleClickUpdate = async (id) => {
        const articleById = await api.getArticleById(id)
        setTitle(articleById.title)
        setText(articleById.text)
        setId(id)
        setOpenModal(true)
       
    }

    return (

        <div className='article'>

            <div className="main--buttons">

                <Fab
                    aria-label="home"
                    variant="contained"
                    color="secondary"
                >
                     <Link to="/">
                        <HomeIcon />
                     </Link>
                </Fab>

                <Button 
                    variant="contained" 
                    color="secondary" 
                    className='new-article-button'
                >
                    <Link className="link--button" to="/new-article">
                        Novo artigo
                    </Link>
                </Button>

            </div>

            <br/>

            <div className="loading">
                { loading && <CircularProgress /> }
            </div>

            <br/>

            <TableContainer component={Paper}>    

                <Table size="small" aria-label="a dense table">

                    <TableHead>

                        <TableRow>

                            <TableCell>Título</TableCell>
                            <TableCell align="right">Última Edição</TableCell>
                            <TableCell align="right">Vizualizações</TableCell>
                            <TableCell align="right">Comentários</TableCell>
                            <TableCell align="right">Actions</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        { articles && articles.map(article => (

                            <TableRow key={ article.title }>

                                <TableCell component="th" scope="row">
                                    <b>{ article.title }</b>
                                </TableCell>

                                <TableCell align="right">
                                    { article.lastEdition }
                                </TableCell>

                                <TableCell align="right">
                                    { article.views }
                                </TableCell>

                                <TableCell align="right">
                                    0
                                </TableCell>

                                <TableCell align="right">

                                <div className="action-buttons">

                                    <IconButton 
                                        variant="contained"
                                        color="secondary"
                                    >
                                        <Link to={`/article/${article.id}`}>
                                            <VisibilityIcon/>
                                        </Link>
                                    </IconButton>

                                    <IconButton
                                        variant="contained" 
                                        color="primary"
                                        onClick={ () => handleClickUpdate(article.id)}
                                    >
                                        <Link to={`/edit-article/${article.id}`}>
                                            <EditIcon/>
                                        </Link>
    
                                    </IconButton>

                                    <IconButton
                                        variant="contained" 
                                        color="secondary"
                                        onClick={ () => handleClickDelete(article.id)}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>

                                </div>

                                </TableCell>

                            </TableRow>

                            ))}
                
                    </TableBody>

                </Table>

            </TableContainer>

        </div>

    );
}

export default ArticleList
