import React from 'react'
import {render} from 'react-dom'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'

import App from './modules/App.js'
import About from './modules/About.js'
import Repos from './modules/Repos.js'
import Repo from './modules/Repo.js'
import Home from './modules/Home.js'

render((<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:reposName" component={Repo}/>
            </Route>
        </Route>
    </Router>),document.getElementById('app'));

