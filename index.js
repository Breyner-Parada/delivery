const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const {Server} = require('socket.io');
const {createServer} = require('http');
const { connectionToMongo } = require('./lib/connection');
const { config } = require('./config');
const routerApp = require('./routes');


const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
const port = config.port;



app.use(cors());
connectionToMongo();
app.use(express.json());
routerApp(app);
 admin.initializeApp({
     credential: admin.credential.cert(JSON.parse(config.serviceAccountKey))
 });

app.get('/', (req, res) => {
    res.send('API IS WORKING');
});

io.on('connection', (socket) => {
    console.log('a user connected with id', socket.id);
    socket.join(socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
     socket.on('orderAccepted', ({res, socketid}) => {
            console.log('orderAccepted', res, socketid);
         socket.to(socketid).emit('sendNotification', res);
     });
});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
