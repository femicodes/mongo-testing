import express from 'express';
import bodyParser from 'body-parser';
import debug from 'debug';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import '@babel/polyfill';
import api from './routes/index';
import Response from './utils/Response';

config();

const app = express();
const port = process.env.PORT || 6000;
const debugged = debug('express');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.options('*', cors());

app.use('/api/v1/', api);

app.all('*', (req, res) => {
  Response.error(res, 404, 'route is invalid');
});

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://femi:forum0@ds133086.mlab.com:33086/forum-dev', { useNewUrlParser: true });

if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://femi:forum0@ds157599.mlab.com:57599/forum-test', { useNewUrlParser: true });
}

app.listen(port, () => {
  debugged(`Server running on port ${port}`);
});

export default app;
