require('dotenv').config({ path: __dirname +'/.env.local' });
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
const allowedOrigins = [
  "http://localhost:3000",
  "https://expense-tracker-frontend-vr1c.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// api routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/budget', require('./routes/budget.js'));
app.use('/api/expense', require('./routes/expense.js'));

app.listen(port, () => {
    console.log(`Expense tracker app listening on port ${port}`)
})