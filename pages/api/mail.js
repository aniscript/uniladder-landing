export default function (req, res) {
  const body = JSON.parse(req.body);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "webmailuniladder@gmail.com",
      pass: "osnmjlcpgoogqcov",
    },
    secure: true,
  });
  const message = `
  Name: ${body.fullName}\r\n
  Email: ${body.email}\r\n
  Contact: ${body.contact}\r\n
  Level: ${body.level}\r\n
  Academic Background: ${body.academic}\r\n
  Grade/Percentage: ${body.grade}\r\n
  Passout year: ${body.passout}\r\n
  English Test Done: ${body.english}\r\n
  English Test Type: ${body.type}\r\n
  Score: ${body.score}\r\n
  `;
  const mailData = {
    from: "webmailuniladder@gmail.com",
    to: "receptionuniladder@gmail.com",
    subject: `Message From ${body.fullName}`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
