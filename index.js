import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

const start = () => {
  try {
    app.listen(PORT, () => console.log('Server is running!'));
  } catch (err) {
    console.log(err);
  }
};

start();
