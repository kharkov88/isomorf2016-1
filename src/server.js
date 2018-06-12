
import express from 'express'
import React from 'react'
import ReactDom from 'react-dom/server'
import { StaticRouter, Route, Switch } from 'react-router'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/App/App.jsx'
import NotFound from 'components/NotFound'
import routes from './routes'

const app = express()

app.use(express.static(__dirname + '/'))
app.use((req, res) => {
  const context = {}
  const componentHTML = ReactDom.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      {routes}
    </StaticRouter>
  )
  res.end(renderHTML(componentHTML))
})

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/'

function renderHTML (componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head> 
          <title>MobilizeToday</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>

      <body >
        <div id="react-view">${componentHTML}</div>
        
        <!-- SCRIPTS BG-1 -->
        <script src="js/bg-1/particles.js"></script>
        <script src="js/bg-1/app.js"></script>
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/random-amimation-block.js"></script>

        <!-- react-app -->
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>

      </body>
    </html>
  `
}

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`)
})
