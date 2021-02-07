const mongoose = require('mongoose');
const Process = require('../models/process.model');

// handling POST,GET,PUT,DELETE for /process/*
exports.allProcess = (req, res) => {
  let randomTime = Math.floor(Math.random() * 15) + 15;
  processDetail = {
    date: new Date().toISOString(),
    method: req.method,
    headers: req.headers,
    path: `/process${req.path}`,
    query: req.query,
    body: req.body,
    duration: randomTime,
  };
  // saving to DB and response
  const ProcessDetail = new Process(processDetail);
  ProcessDetail.save((err, ProcessDetail) => {
    if (err) {
      return res.status(400).json({
        err: 'NOT able to save process in DB',
      });
    } else {
      setTimeout(function () {
        return res.status(200).json(processDetail);
      }, randomTime * 1000);
    }
  });
};
