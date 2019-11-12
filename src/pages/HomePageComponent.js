import React from 'react'
import {Helmet} from 'react-helmet';

class Home extends React.Component {





    exampelMethod() {
        console.log('asddddddddddddddddddddd')
    }

    head() {
        return (<Helmet>
            <title>Home</title>
            <meta name='keywords' content="Home keywords"/>
            <meta name='description' content="Home description"/>

        </Helmet>)
    }

    render() {
         return (
            <div>
                {this.head()}
                <h1>HOME</h1>

                <p>HOME COntent</p>
                <button onClick={() => this.exampelMethod()}>SEND</button>
            </div>
        )
    }
}

export default Home;