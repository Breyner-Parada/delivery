const {Router} = require('express');

const restautrantRouter = require('./restaurantRoutes');
const userRouter = require('./usersRoute');
const categoryRouter = require('./categoryRoute');
const dishRouter = require('./dishRoute');
const featuredRouter = require('./featuredRoute');
const restaurantOwnerRouter = require('./restaurantsOwner');
const pushnotificationRouter = require('./sendPNRoute');
const ordersRouter = require('./orderRoute');
const userDriverRouter = require('./userDriverRoute');

function routerApp(app) {
    const router = Router();
    app.use('/api', router);
    router.use('/restaurants', restautrantRouter);
    router.use('/users', userRouter);
    router.use('/categories', categoryRouter);
    router.use('/dishes', dishRouter);
    router.use('/featured', featuredRouter);
    router.use('/restaurantOwner', restaurantOwnerRouter);
    router.use('/send', pushnotificationRouter);
    router.use('/orders', ordersRouter);
    router.use('/userdriver', userDriverRouter);
}

module.exports = routerApp;