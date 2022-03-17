const { setDefaultTimeout, Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
var axios = require("axios");

const testData = {
  user: "a41b326e0dd047b280c39ae255011ddf",
  token: "403374b7b8ecb4cd0161f75f3d5573f3d942a2f5349a8b432b41e0b48e41ec53",
  validBoardName: "Challenge", 
};

setDefaultTimeout(60 * 1000);

let statusCode;
let badStatusCode;

Given('User with id and token exists and have a list of boards', async function () {
  var config = {
    method: "get",
    url: `https://api.trello.com/1/members/me/boards?key=${testData.user}&token=${testData.token}`,
    headers: {
      Cookie:
        "dsc=63766d32eb96e38bb68c3303e44ec2f6794904b040d9699f3472c672e03396f3; preAuthProps=s%3A60b4877338c12a2de21073ad%3AisEnterpriseAdmin%3Dfalse.mZwoWYBjDLFcHiQAt32kVbMsMFqVVum0ZO6Iuu%2BkTEo",
    },
  };

 await axios(config)
    .then(function (response) {
      console.log('User board list GET method status :', response.status)
    })
    .catch(function (error) {
      console.log(error);
    });
});

When('A POST request is made to create a new board named: Challenge', async function () {
  var config = {
    method: "post",
    url: `https://api.trello.com/1/boards/?key=${testData.user}&token=${testData.token}&name=${testData.validBoardName}`,
    headers: {
      Cookie:
        "dsc=63766d32eb96e38bb68c3303e44ec2f6794904b040d9699f3472c672e03396f3; preAuthProps=s%3A60b4877338c12a2de21073ad%3AisEnterpriseAdmin%3Dfalse.mZwoWYBjDLFcHiQAt32kVbMsMFqVVum0ZO6Iuu%2BkTEo",
    },
  };

   await axios(config)
    .then(function (response) {
    return statusCode = JSON.stringify(response.status);
     
    })
    .catch(function (error) {
    /*   console.log(error.request); */
    });
});

When('A POST request is made to create a new board named: ', async function () {
  var config = {
    method: "post",
    url: `https://api.trello.com/1/boards/?key=${testData.user}&token=${testData.token}&name=`,
    headers: {
      Cookie:
        "dsc=63766d32eb96e38bb68c3303e44ec2f6794904b040d9699f3472c672e03396f3; preAuthProps=s%3A60b4877338c12a2de21073ad%3AisEnterpriseAdmin%3Dfalse.mZwoWYBjDLFcHiQAt32kVbMsMFqVVum0ZO6Iuu%2BkTEo",
    },
  };

  await axios(config)
    .then(function (response) {
    return badStatusCode = JSON.stringify(response.status);
     
    })
    .catch(function (error) {
      return badStatusCode = error.request
      console.log(error.request);
    });
});

Then('Get the HTTP status code {int}', function (statusCode) {
   console.log('statusCode of POST method:', statusCode)
 
 /*return expect(statusCode).to.be.equal(200) */
  
});

