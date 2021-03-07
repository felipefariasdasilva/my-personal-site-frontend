import { Button, Divider } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useApi from '../../services/api'
import './style.css'
import { Markup } from 'interweave';
import CircularProgress from '@material-ui/core/CircularProgress';
import Switch from '@material-ui/core/Switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

export default function ArticlePage() {
    
    const api = useApi()
    const history = useHistory()
    const params = useParams()

    const [article, setArticle] = useState({})
    const [themeCheck, setThemeCheck] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect( () => {
       
        setLoading(true)
        const getArticleById = async () => {
            const json = await api.getArticleById(params.id)
            console.log(json);
            setArticle(json)
        }

        getArticleById()
        setLoading(false)

    }, [])


    const handleChangeTheme = () => {
        setThemeCheck(!themeCheck)
    }

    return (

        <div className="article--container">       

            <div className="theme--selector">
                <WbSunnyIcon/>
                <Switch
                className="switch--color"
                checked={themeCheck}
                onChange={handleChangeTheme}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <NightsStayIcon/>
            </div>

            <ins 
                className="adsbygoogle"
                style={{display:'block'}}
                data-ad-client="5013923208312104"
                data-ad-slot="24524524"
                data-ad-format="auto">
            </ins>

            <div className="article-body">

                <div className="box"></div>

                <div className="loading">
                    { loading && <CircularProgress /> }
                </div>

                <div className="article--page">

                    {article && 

                        <div>
                            <p>{ article.lastEdition } </p>
                            <h1>{ article.title } </h1>
                            <br/>
                            <Divider />
                        
                            <br/>
                            <Markup content={article.text} />
                        </div>

                    }

                </div>
            
            </div>

            <div className="nav--buttons">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={ () => history.push('/articles')} 
                >
                    Ver artigos
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={ () => history.push('/')} 
                >
                    Home
                </Button>
            </div>

            <br/>

        </div>

        

    )
}
