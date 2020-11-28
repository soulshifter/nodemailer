/*
 * Created Date: Saturday, October 17th 2020, 10:03:31 pm
 * Author: $ 0 u l $ h i f t e r (damaniac.vic1251998@gmail.com)
 * Copyright (c) 2020, damaniacVic
 * -----------------------------------------------------------------------
 */

const { sendEmail } = require("./nodemailer-service/nodemailer");

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

function getUserInput() {
	return new Promise((resolve, reject) => {
		readline.question(
			"Enter email Id to send the email to: ",
			(emailId) => {
				console.log(`Check the email Id for email: ${emailId}`);
				readline.close();
				resolve(emailId);
			}
		);
	});
}

async function useNodemailer() {
	let emailId = await getUserInput();
	await sendEmail(emailId);
}

useNodemailer();
