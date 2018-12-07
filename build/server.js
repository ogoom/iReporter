"use strict";

var express = require("express");
var bodyParser = require("body-parser");
//const Incident = require("./src/controller/iReportController");


var app = express();

var indexRouter = require("./routes/index");
var redFlagRouter = require("./routes/red-flag/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/api/v1/red-flags", redFlagRouter);

// app.get("/", (req, res) => {
// 	return res.status(200).send({"message": "YAH! Congratulations! Your first endpoint is working"});
// });
// app.post("/api/v1/type/red-flag/",bodyParser.json(), Incident.create);
// app.get("/api/v1/type/red-flag/", Incident.getAll);
// app.get("/api/v1/type/red-flag/:id", Incident.getOne);
// app.patch("/api/v1/type/red-flag/:id", Incident.updateLocation);
// app.patch("/api/v1/type/red-flag/:id", Incident.comment);
// app.delete("/api/v1/type/red-flag/:id", Incident.delete);

app.listen(3000);
// eslint-disable-next-line no-console
console.log("app running on port ", 3000);