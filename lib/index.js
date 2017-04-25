'use strict';

function lambda(connector) {
    let listener = connector.listen();
    let handler = (event, context, callback) => {
        let reqWrapper = {
            body: JSON.parse(event.body),
            headers: event.headers
        };
        let statusCode;
        let resWrapper = {
            status: (code) => {
                statusCode = code;
            },
            end: () => {
                callback(null, { statusCode: statusCode });
            }
        };
        listener(reqWrapper, resWrapper);
    };
    return handler;
}

module.exports = lambda;