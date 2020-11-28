/*
 * Created Date: Saturday, October 17th 2020, 9:27:07 pm
 * Author: $ 0 u l $ h i f t e r (damaniac.vic1251998@gmail.com)
 * Copyright (c) 2020, damaniacVic
 * -----------------------------------------------------------------------
 */

"use strict";

const nodemailer = require("nodemailer");
const { mail, host, user, pass, port, secure } = require("./../config");

async function getTransporter() {
	console.log(host);
	console.log(user);
	console.log(pass);
	let transporter = nodemailer.createTransport({
		service: "Gmail",
		// name: String(mail),
		// host: String(host),
		// port: Number(port),
		// secure: Boolean(secure),
		auth: {
			user: String(user),
			pass: String(pass),
		},
	});

	return transporter;
}

exports.sendEmail = async (emailId) => {
	let transporter = await getTransporter();
	let mailOptions = {
		from: '"Soulshifter" <abc@xyz.com>',
		to: emailId,
		subject: "Nodemailer test",
		text: "Nodemailer is working",
		list: {
			unsubscribe: {
				url: "abc@xyz.com",
				comment: "Unsubscribe",
			},
		},
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log("ERROR: ", error);
		} else {
			console.log("-------------- Message sent ---------------");
		}
	});
};
