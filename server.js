//Boiler Plate
const express = require('express'),
    app = express(),
    port = 3000 || process.env.PORT

const server = app.listen(port, () => {
    console.log(`Server listening on port 3000`);
});

const close = () => {
    console.log("Shutting down server")
    server.close()
}

module.exports = {
    close
}