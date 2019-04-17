const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, './public')));

const chartReq = axios.create({
    baseURL: 'http://ec2-13-57-177-212.us-west-1.compute.amazonaws.com:2468/'
  });
  
  app.get('/api/:stockId', (req, res) => {
    chartReq.get(`api/${req.params.stockId}`)
    .then((response) => {
      res.send(response.data);
    })
  })

  const buyFormReq = axios.create({
      baseURL: 'http://ec2-54-89-184-8.compute-1.amazonaws.com:8080/' 
  });

  app.get('/stocks/:query', (req, res) => {
      buyFormReq.get(`stocks/${req.params.query}`)
      .then((response) => {
          res.send(response.data);
      })
  })

app.listen(port, () => {
    console.log('Server is listening on port', port);
});

