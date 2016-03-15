## js-learn-spbu-test-task
NodeJS server for js-learn-spbu project

####1. Preparation
Install [NodeJS](https://nodejs.org/en/).
This server requires [weather-js](https://www.npmjs.com/package/weather-js) npm package, install it in repository folder: <br />
```
npm install weather-js
```
####2. Usage
- Change city name in [_setting.js](/_settings.js) (optional).
```Javascript
module.exports = {
  city: 'Saint-Petersburg'
}
```
- Start the server with Node
```
node server.js
```
- Send request to port 8080 in your browser
```
http://localhost:8080/
```
