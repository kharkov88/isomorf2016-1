
import express from 'express'
import React from 'react'
import ReactDom from 'react-dom/server'
import { StaticRouter, Route, Switch } from 'react-router'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/App/App.jsx'
import routes from './routes'

const app = express()

app.use(express.static(__dirname + '/'))
app.use((req, res) => {
  const context = {}
  const store = configureStore()
  const componentHTML = ReactDom.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        {routes}
      </StaticRouter>
    </Provider>
  )
  res.end(renderHTML(componentHTML))
})

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/'

function renderHTML (componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">  
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `
}

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`)
})
