const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'holacode',
  database: 'react_sql'

});
connection.connect(err => {
  if(err){
    return err;
  }
});
console.log(connection)
app.use(cors());

app.get('/', (req, res) => {
  res.send('go to /products to see products')
});

app.get('/products', (req, res) => {
 connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results)=> {
    if (err) {
      return res.send(err)
    }else{
      return res.json({
        data: results
      })
    }
 })
});

app.listen(4000, ()=> {
console.log(`app server listening on port 4000`)

});
