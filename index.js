import http from 'http';
import express from 'express';
import twilio from 'twilio';
import bodyParser from 'body-parser';
import db from './db';

const PORT = 3000;
const app = express();
// const client = twilio(TWILIO_SID, TWILIO_AUTH);
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/sms', (req, res) => {
  const twiml = new twilio.twiml.MessagingResponse();
  const { From, Body } = req.body;

  if (body.toLowerCase() === 'gratitude') {
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

http.createServer(app).listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`);
});
