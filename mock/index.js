const express = require("express");
module.exports = function(app) {
  app.use(express.urlencoded());

  app.use(express.json());

  app.get("/getPer", function(req, res) {
    let wu = req.query;
    res.send(wu);
  });
};
