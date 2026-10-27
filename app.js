import express from 'express';

const app = express();

const PORT = 3005;

const vacations = [];

//Serve files statically
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.post('/submit-vacation', (req, res) =>  {
  console.log(req.body);

  const vacation = {
    Destination: req.body.destination,
    Date: req.body.date,
    Travelers: req.body.num,
    timestamp: new Date()
  };

  vacations.push(vacation);
  console.log(vacations);

  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
