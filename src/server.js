
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
  console.log(req.url)
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
          <link rel="stylesheet" href="/css/animate.css">
          <link rel="stylesheet" href="/css/main.css">
          <link rel="stylesheet" href="/css/hover.css">
          <link rel="stylesheet" type="text/css" href="/css/portfolio.css" />
          <script src="/js/portfolio/modernizr.custom.js"></script>

          <link rel="apple-touch-icon" sizes="57x57" href="/img/icons/apple-icon-57x57.png">
          <link rel="apple-touch-icon" sizes="60x60" href="/img/icons/apple-icon-60x60.png">
          <link rel="apple-touch-icon" sizes="72x72" href="/img/icons/apple-icon-72x72.png">
          <link rel="apple-touch-icon" sizes="76x76" href="/img/icons/apple-icon-76x76.png">
          <link rel="apple-touch-icon" sizes="114x114" href="/img/icons/apple-icon-114x114.png">
          <link rel="apple-touch-icon" sizes="120x120" href="/img/icons/apple-icon-120x120.png">
          <link rel="apple-touch-icon" sizes="144x144" href="/img/icons/apple-icon-144x144.png">
          <link rel="apple-touch-icon" sizes="152x152" href="/img/icons/apple-icon-152x152.png">
          <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-icon-180x180.png">
          <link rel="icon" type="image/png" sizes="192x192"  href="/img/icons/android-icon-192x192.png">
          <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="96x96" href="/img/icons/favicon-96x96.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png">
        
          <meta name="msapplication-TileColor" content="#ffffff">
          <meta name="msapplication-TileImage" content="/img/icons/ms-icon-144x144.png">
          <meta name="theme-color" content="#ffffff">
      </head>

      <body >
        <div id='particles-js'> </div>
        <div id="react-view">${componentHTML}</div>
        
        <!-- SCRIPTS BG-1 -->
        <script src="/js/bg-1/particles.js"></script>
        <script src="/js/bg-1/app.js"></script>
        <script src="/js/jquery-3.3.1.min.js"></script>
        <script src="/js/random-amimation-block.js"></script>

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
