import nodemailer from "nodemailer";

const from = '"Bookworm" <info@bookworm.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export function sendConfirmationEmail(user) {
  const tranport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to Bookworm",
    text: `
    Welcome to Bookworm. Please, confirm your email.

    ${user.generateConfirmationUrl()}
    `
  };

  tranport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  console.log(user.email);
  console.log(user);
  const tranport = setup();
  const email = {
    from: '"Castor App" <info@castorapp.com>',
    to: user.email,
    subject: "Castor App - Reset Password Request",
    text: `
    To reset password follow this link

    ${user.generateResetPasswordLink()}
    `
  };

  tranport.sendMail(email);
}
