import 'dotenv/config';
import './db.js';
import './models/User.js';
import app from './server.js';
import config from './config/config';

const PORT = config.port;

app.listen(PORT, () => console.log(`✅Server listening on port ${PORT}`));
