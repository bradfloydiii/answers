let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application-json');
  next();
})

app.get('/', (req, res) => {
  res.status(200).send(JSON.stringify({message: 'Express works'}));
});

app.get('/interview', (req, res) => {
  res.status(200).send('Interview works');
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

