'use strict';

function lambda(connector) {
    let listener = connector.listen();
    return (event, context, callback) => {
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
}

module.exports = lambda;
