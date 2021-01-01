# TalkAway
A simple blog app by Node.js with Google Authentication.

## Project Status

[![Github license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/hasimy-as/TalkAway/master/LICENSE)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://gitHub.com/hasimy-as/TalkAway)


## Version

Current app version is on v1.1.

## Usage

```
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start

# Initialize mongodb
mongod

```

## Endpoints

```
# Routes
ROOT                       {{url}}/
DASHBOARD                  {{url}}/dashboard
GOOGLE AUTHENTICATION      {{url}}/auth/google
CALLBACK                   {{url}}/auth/google/callback
LOGOUT                     {{url}}/auth/logout
CREATE STORY               {{url}}/stories/add
GET STORIES                {{url}}/stories

```

## Documentation

To setup MongoDB cluster and Google OAUTH, refer to the following documentation.

<a href="docs/Talkaway Documentation.pdf">Talkaway Documentation.pdf</a>

## Licensed under [MIT](https://raw.githubusercontent.com/hasimy-as/TalkAway/master/LICENSE)

Happy coding!

~Hasimy
