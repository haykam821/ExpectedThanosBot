const config = require("./config.json");

const SnooStream = require("snoostream");

const version = require("./package.json").version;

const snooStream = SnooStream({
	username: config.auth.username,
	password: config.auth.password,
	clientId: config.auth.clientID,
	clientSecret: config.auth.clientSecret,
	userAgent: `ExpectedThanosBot ${version} by haykam821`,
});
const stream = snooStream.submissionStream("all");