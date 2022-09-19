import express from 'express';
import { main, updateMain, getMain, deleteMain } from './utils/db.mjs';
import { Kitten } from './utils/model/index.mjs';
import bodyParser from 'body-parser';
import {
  generateURLs,
  inputForm,
  html,
  doesntExist,
  yourValue,
  updateForm,
} from './generateURLs.mjs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);
mongoose.connection;

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 80;
const thisUrl = 'http://localhost:3000';

app.get('/', function (req, res) {
  res.send(html(`${inputForm()}`));
});

app.get('/update/:uuid/:value', function (req, res) {
  res.send(html(`${updateForm(req.params.uuid, req.params.value)}`));
});

app.get('/:uuid', async function (req, res) {
  const { uuid } = req.params;
  const record = await getMain(uuid).catch((err) => {
    return null;
  });

  if (!record) {
    res.send(html(doesntExist()));
    return;
  }
  res.send(html(`${yourValue(record.name, record._id, record.deleteCode)}`));
});

//POST
app.post('/:value', async function (req, res) {
  let value = null;
  if (req.body.newItem) {
    value = req.body.newItem;
  } else {
    value = req.params.value;
  }

  const record = await main(value).catch((err) => console.log(err));
  res.send(
    html(await generateURLs(record.name, record._id, record.deleteCode))
  );
});

app.post('/', async function (req, res) {
  let value = null;
  if (req.body.newItem) {
    value = req.body.newItem;
  } else {
    value = req.params.value;
  }

  const record = await main(value).catch((err) => console.log(err));
  res.send(
    html(await generateURLs(record.name, record._id, record.deleteCode))
  );
});

app.post('/:uuid/:value', async function (req, res) {
  let value = '';
  let uuid = '';
  value = req.body.newItem;
  uuid = req.body.hiddenId;
  const record = await updateMain(uuid, value).catch((err) => console.log(err));
  console.log(record);

  res.send(
    html(await generateURLs(record.name, record._id, record.deleteCode))
  );
});

app.put('/:uuid/:value', async function (req, res) {
  let value = '';
  let uuid = '';

  uuid = req.params.uuid;
  value = req.params.value;
  const record = await updateMain(uuid, value).catch((err) => console.log(err));
  res.send(
    html(await generateURLs(record.name, record._id, record.deleteCode))
  );
});

app.delete('/:uuid/:deleteCode', async function (req, res) {
  const { uuid, deleteCode } = req.params;
  await deleteMain(uuid, deleteCode).catch((err) => console.log(err));
  res.send(`Deleted!`);
});

app.listen(port, function () {
  console.log('Example app listening on port port!');
});
