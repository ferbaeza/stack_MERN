# MERN Stack ToDo app

# Start a node project
npm i -y 
mkdir src
        -app
        -models
        -public
        -routes
        -settings
create a index.js
create a .babelrc / .env / .gitignore / webpack.config.js

# Install dependencies
In save mode -S
    -dotenv
    -express
    -mongoose
    -morgan
In dev mode -D
    -nodemon
    -react
    -react-dom
    -webpack
    -webpack-cli
    -@babel/core
    -@babel/preset-env
    -@babel/preset-react

#### SETTINGS
# .ENV
We will save the URI from Atlas and our PORT

# .WEBPACK.CONFIG.JS

We indicate where to compile the bundle.js and where is the html doc we will convert using React

module.exports={
    entry: './src/app/index.js',
    output:{
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          }
        ]
      }};

# .BABELRC
We made the preset configuration to convert our rjx files to js files
{
    //"presets": ["env", "react"],
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}

