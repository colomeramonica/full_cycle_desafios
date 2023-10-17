import express from 'express';
import { createConnection } from 'mysql2/promise';

const app = express();
const port = 3000;
const config = {
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'nodejs'
};

const runQuery = async (query) => {
  const connection = await createConnection(config);

  try {
    const [rows] = await connection.execute(query);
    return rows;
  } finally {
    await connection.end();
  }
};

app.get('/', async (req, res) => {
  const insertQuery = `INSERT INTO people(name) VALUES ('Monica')`;
  await runQuery(insertQuery);

  const selectQuery = `SELECT * FROM people`;
  const results = await runQuery(selectQuery);

  res.send(`<h1>Full Cycle Rocks!</h1><pre>${JSON.stringify(results, null, 2)}</pre>`);
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
