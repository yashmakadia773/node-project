const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "vadodariyabhargav54@gmail.com",
    pass: "lpbovqcpvyxjelcu",
  },
});

let sendEmail = (to, subject, data) => {
  return transporter.sendMail({
    from: '"Hello👻" <vadodariyabhargav54@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject,
    text: data, // plain text body
  });
};

module.exports = sendEmail;
