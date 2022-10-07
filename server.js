import debug from 'debug';
debug ('COMP229');
import http from 'http';
import { isPromise } from 'util/types';

import app from './app/app.js';

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);