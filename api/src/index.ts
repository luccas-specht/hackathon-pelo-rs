import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import { MONGODB_URI } from './secret/db';
import mapRoutes from './helper/routes';
import controllers from './controller';
import { requestErrorHandlerMiddleware } from './middleware/errors';

const SERVER_PORT = 8080;

let app = express();

app.use(
    cors({
        credentials: true,
    })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app = mapRoutes(app, controllers);
app.use(requestErrorHandlerMiddleware);

const server = http.createServer(app);

server.listen(SERVER_PORT, () => {
    console.log('Server running on http://localhost:8080/');
});

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
mongoose.connection.on('error', (error: Error) => console.log(error));
mongoose.connection.once('open', () =>
    console.log('MongoDB connection established')
);
