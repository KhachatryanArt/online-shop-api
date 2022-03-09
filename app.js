require('dotenv').config()
const Koa = require("koa");
const router = require('./src/routers/index');
const sequelize = require('./src/db/connection/connection');
const redis = require("./src/db/connection/redis-connetion")
const app = new Koa();

const koaBody = require("koa-body");

app.use(koaBody());
app.use(router.routes());

sequelize.authenticate().then(() => {
    console.log('Database connected successfully!');
}).catch(err => {
    console.log('Unable to connect database', err);
});

redis.connect().then(() => {
    console.log("Redis connected successfully");
}).catch(err => {
    console.log("Unable to connect redis ", err);
})

app.listen(process.env.PORT, () => {
    console.log("Server start!");
});