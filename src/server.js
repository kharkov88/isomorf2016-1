import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDom from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'

import configureStore from 'redux/configureStore'
import App from 'components/App'
import sendmsg from 'utilities/sendmsg'
import renderHTML from 'utilities/render'

const app = express()
const jsonParse = bodyParser.json()

app.use(express.static(__dirname + '/'))

app.get('/*', (req, res) => {
  console.log(req.url)
  const context = {}
  const componentHTML = ReactDom.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
  )
  res.end(renderHTML(componentHTML, req.url))
})

app.post('/send-form/*', jsonParse, (req, res) => {
  // req.body.path = req.url
  /// console.log(req.body)
  sendmsg(req.body)
  setTimeout(() => {
    res.send('success!')
  }, 2000)
})

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`)
})
