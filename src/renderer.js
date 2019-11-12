import React from "react";
import ReactDOM from "react-dom/server";
import fetch from 'isomorphic-fetch'
import {StaticRouter} from "react-router-dom";
import Helmet from "react-helmet";
import App from "./App";
import Template from "./component/Template";



export default function renderer(html,path, context) {



    context.data = {};



        const serverHtml = ReactDOM.renderToString(
            <StaticRouter location={path} context={context}>

                <Template>
                    <App/>
                </Template>
            </StaticRouter>
        );
        const regex = /(<div id="root">)(<\/div>)/;
        html = html.replace(regex, function (original, div1, div2) {
            return div1 + serverHtml + div2;
        });
        const helmet = Helmet.renderStatic();
        const head = helmet.title.toString() + helmet.meta.toString();
        const index = html.indexOf("</head>");
        const html1 = html.slice(0, index);
        const html2 = html.slice(index);


        return html1 + head + html2;

}
