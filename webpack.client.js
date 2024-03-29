const path=require('path');

module.exports={
    target:'node',
    entry:'./server.js',
    output: {
        filename: "client_bundle.js",
        path: path.resolve(__dirname,'build/public'),
        publicPath: "/build/public"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets:[
                        'react',
                        'stage-0',
                        [
                            'env',{    target:{browsers:['last 2 version']}  }
                        ]
                    ]
                }
            }
        ]
    }

}