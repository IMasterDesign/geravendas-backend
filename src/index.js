const express = require('express');
const cors = require('cors');
const server = express();
server.use (express.json());

const ClientRoutes = require('./routes/ClientRoutes');
server.use('/client', ClientRoutes);

const ProductCategoryRoutes = require('./routes/ProductCategoryRoutes');
server.use('/productcategory', ProductCategoryRoutes);
const ProductRoutes = require('./routes/ProductRoutes');
server.use('/product', ProductRoutes);

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);
/*
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next('/task', TaskRoutes);
});
*/

server.listen(3333, ()=> {
    console.log('WoW API ONLINE');
});