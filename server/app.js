let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

const result = {
  message: 'Result from ExpressJS',
  data: {
    name: 'Bradley Floyd III',
    company: 'Perficient Inc.',
    position: 'Lead Tech Consultant'
  }
}

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Perficient');
});

app.get('/data', (req, res) => {
  res.json(result);
});



app.listen(port, () => console.log(`App listening on port ${port}!`))

