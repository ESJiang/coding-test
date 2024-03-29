const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
const PORT = 8080;
app.use(cors());
app.use(router);
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
