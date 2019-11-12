import React  from 'react';



import Helmet from 'react-helmet';






function Blog (){

    async   function postloadData() {


          return   'df';

    }
    {console.log(postloadData() )}
var a=postloadData();
    {console.log(a)}

    return (

         <div>
                 <Helmet>
                    <title>sdsdsdsds</title>

                    <meta name='keywords' content="Blog keywords"/>
                     <meta name='description' content="Blog description"/>
                 </Helmet>
                <h1>Blog</h1>
                <h1>Blog</h1>
                <h1>Blog</h1>
                <h1>Blog</h1>


                 <button>SEND</button>
            </div>
        )


}

export default Blog;