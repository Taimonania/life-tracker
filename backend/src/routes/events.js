const express = require('express');
const protobuf = require('protobufjs');

const router = express.Router();

const eventDoc = {
    title: "Sample Event",
    description: "This is a sample event!"
}



router.get('/', async (req, res, next) => {
    const root = await protobuf.load('src/data/event.proto');
    const Event = root.lookupType('eventpackage.Event');
    const encoded = Event.encode(eventDoc).finish();
    console.log("Encoded: ", encoded);
    const decoded  = Event.decode(encoded);
    console.log("Decoded: ", decoded);
    res.send(encoded);
});

module.exports = router;