import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import Template from "./component/Template";


ReactDom.hydrate(
    <BrowserRouter>
        <Template>
            <App/>
        </Template>

    </BrowserRouter>,
    document.querySelector('#root')
)