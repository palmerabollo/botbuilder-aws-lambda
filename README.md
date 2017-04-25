# botbuilder-aws-lambda

Deploy your Microsoft Bot as an AWS Lambda function.

```
const botbuilder = require('botbuilder');
const lambda = require('botbuilder-aws-lambda');

let connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

exports.handler = lambda(connector); // MAGIC HAPPENS HERE

let bot = new builder.UniversalBot(connector);
```

## LICENSE

Apache 2.0