const admin = require('firebase-admin');

const sendPN = async (req, res) => {
    const { orderId, token } = req.body;
    try {
        await admin.messaging().sendMulticast({
            tokens: token,
             data: {
                 orderId
             }
        });
        res.status(200).json({ message: 'Notification sent successfully'});
    } catch (error) {
        res.status(400).json({ message: 'Notification sent failed', error });
    }
};

module.exports = { sendPN };