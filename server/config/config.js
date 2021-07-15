export default {
    nodeEnv: process.env.NODE_ENV,
    mongoUri: process.env.MONGO_URI,
    port: process.env.PORT || 4000,
    tokenSecret: process.env.TOKEN_SECRET
}