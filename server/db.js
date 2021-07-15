import mongoose from 'mongoose';
import config from './config/config';

mongoose.connect(config.mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
const db = mongoose.connection;

const handleError = (err) => console.log("DB Error", err);
const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", handleError);
db.once("open", handleOpen);