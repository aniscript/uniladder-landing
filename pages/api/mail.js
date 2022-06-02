const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.fullName}\r\n
  Email: ${body.email}\r\n
  Contact: ${body.contact}\r\n
  Location: ${body.location}\r\n
  `;

  const data = {
    to: "aneeslml@gmail.com",
    from: "anishlamsal97@gmail.com",
    subject: "New Appointment",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "OK" });
};
