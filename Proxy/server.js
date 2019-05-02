require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use('/stocks/:id', express.static(path.join(__dirname, './public')));

// const chartReq = axios.create({
//     baseURL: 'http://127.0.0.1:8080'
//   });
  
//   app.get('/api/:stockId', (req, res) => {
//     chartReq.get(`api/${req.params.stockId}`)
//     .then((response) => {
//       res.send(response.data);
//     })
//   })

  const buyFormReq = axios.create({
      baseURL: '54.67.47.151:8080' 
  });

  app.get('/api/stocks/:query', (req, res) => {
      buyFormReq.get(`api/stocks/${req.params.query}`)
      .then((response) => {
          res.send(response.data);
      })
  })

app.listen(port, () => {
    console.log('Server is listening on port', port);
});

