export default function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    service: "Gmail",
    auth: {
      user: "tourfcm@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "tourfcm@gmail.com",
    to: "tourfcm@gmail.com",
    subject: `Message From ${req.body.email}`,
    text:
      "Nome: " +
      req.body.name +
      " |  email: " +
      req.body.email +
      "Empresa: " +
      req.body.company +
      " |  Cidade: " +
      req.body.city +
      " | Mensagem: " +
      req.body.message,
    html: `<div>De: ${req.body.name} - Email: ${req.body.email}
    <br>Empresa: ${req.body.company} - Cidade: ${req.body.city} 
    <br><br>${req.body.message}</div>`,
  };
  transporter.sendMail(mailData, function (err, result) {
    if (err) {
      res.status(400).send(err);
    }
    if (result) {
      res.status(200).send(result);
    }
  });
}
