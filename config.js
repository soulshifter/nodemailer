/*
 * Created Date: Sunday, October 18th 2020, 1:12:25 pm
 * Author: $ 0 u l $ h i f t e r (damaniac.vic1251998@gmail.com)
 * Copyright (c) 2020, damaniacVic
 * -----------------------------------------------------------------------
 */

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	mail: process.env.MAIL,
	host: process.env.HOST,
	user: process.env.USER,
	pass: process.env.PASS,
	port: process.env.PORT,
	secure: process.env.SECURE,
};
