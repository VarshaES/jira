// var JiraApi = require('jira-client')


import JiraApi from 'jira-client';
var jira = new JiraApi({
    protocol: 'https',
    host: 'billgo.atlassian.net',
    username: 'username',
    password: 'password',
    strictSSL: true
});


var issueNumber = "BPUI-1086";

jira.findIssue(issueNumber)
    .then(function (issue) {
        console.log('Status: ' + issue.fields.status.name);
    })
    .catch(function (err) {
        console.error(err);
    });