const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

const templateId = "d-0e361bfa693a4ef4b9aa837ba6f3e1d3 ";
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

exports.welcomeMail = functions.https.onCall((data, context) => {
  const msg = {
    to: data.email,
    from: "hello@dscnoun.web.app",
    templateId: templateId,
    dynamic_template_data: {
      subject: "Welcome developer!",
      name: data.displayName,
    },
  };
  return sgMail.send(msg);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
