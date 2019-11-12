import React from 'react';
import {Switch, Route} from 'react-router';

import Home from './pages/HomePageComponent'
import Blog from "./pages/BlogPageComponent";
import useFetchFromApi from "./hooks/useFetchFromApi";


function App () {




        return (

            <Switch>

                <Route exact path="/" render={props => (

                    <Home  />
                )}/>

                <Route exact path="/blog"  render={props => (
                     <Blog  />
                )}/>

            </Switch>

        )

}

export default App;