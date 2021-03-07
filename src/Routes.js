import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Body from './components/body/Body'
import ArticleList from './components/article-list/ArticleList'
import Project from './components/project/Project'
import ArticlePage from './components/article-page/ArticlePage'
import NewArticle from './components/new-article/NewArticle'
import EditArticle from './components/edit-article/EditArticle'

function Routes(){

    return(

        <BrowserRouter>
        
            <Switch>

                <Route exact path="/" component={Body} />
                <Route path="/articles" component={ArticleList} />
                <Route path="/article/:id" component={ArticlePage}/>
                <Route path="/new-article" component={NewArticle}/>
                <Route path="/edit-article/:id" component={EditArticle}/>
                <Route path="/projects" component={Project} />

            </Switch>

        </BrowserRouter>

    )

}

export default Routes