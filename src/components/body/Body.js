import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Avatar, CardHeader, Divider} from '@material-ui/core';
import './style.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link, useHistory} from 'react-router-dom';
import WorkIcon from '@material-ui/icons/Work';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu'

function Body() {

    const history = useHistory()

    return (
        <div className="container">

            <section className="banner">

                <div className="banner--vertical">
                    <div className="banner--horizontal">

                        <div className="banner--title">Bem-vindo Dev!</div>

                        <div className="banner--info">
                            <div className="banner--item">
                                <EmailIcon/>
                                <p>feliipefarias@outlook.com</p>
                            </div>
                            <div className="banner--item">
                                <GitHubIcon/>
                                <p>fellipefariasdasilva</p>
                            </div>
                            <div className="banner--item">
                                <LinkedInIcon/>
                                <p>feliipefariasdasilva</p>
                            </div>
                            <div className="banner--item">
                                <LocationOnIcon/>
                                <p>São José dos Campos, SP</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        
            <section className="container--article">

                <h1 className="article--title">Artigos</h1>

                <div className="article--section">

                    <div className="article--card">
                        <img 
                            className="article--image" 
                            src="https://cdn-images-1.medium.com/max/800/1*EKBKSocoTyjqMC7r9cteQg.png"
                        />

                        <span>
                            <h2>Entendendo Java Functional</h2>
                            <h4>Neste artigo vamos explicar o que é o que é programação funcional em Java</h4>
                        </span>

                        <Button variant="contained" color="secondary">
                            <Link to="/article/d3cdc40e-1a52-4198-bfb9-0e79dd28b31a">
                                Ler
                            </Link>
                        </Button>

                    </div>

                    <div className="article--card">
                        <img className="article--image" 
                        src="https://cdn-images-1.medium.com/max/800/1*EKBKSocoTyjqMC7r9cteQg.png"/>

                        <span>
                            <h2>Entendendo Java Functional</h2>
                            <h4>Neste artigo vamos explicar o que é o que é programação funcional em Java</h4>
                        </span>

                        <Button variant="contained" color="secondary">
                            <Link to="/article/d3cdc40e-1a52-4198-bfb9-0e79dd28b31a">
                                Ler
                            </Link>
                        </Button>

                    </div>

                    <div className="article--card">
                        <img className="article--image" src="https://cdn-images-1.medium.com/max/800/1*EKBKSocoTyjqMC7r9cteQg.png"/>

                        <span>
                            <h2>Entendendo Java Functional</h2>
                            <h4>Neste artigo vamos explicar o que é o que é programação funcional em Java</h4>
                        </span>

                       <Button variant="contained" color="secondary">
                            <Link to="/article/d3cdc40e-1a52-4198-bfb9-0e79dd28b31a">
                                Ler
                            </Link>
                        </Button>
                        
                    </div>


                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => history.push("/articles")}
                >
                    Ver Todos
                </Button>

                <br/>

                </div>

            </section>

        </div>

    )
}

export default Body
