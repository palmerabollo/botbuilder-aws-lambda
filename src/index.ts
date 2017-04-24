import * as builder from 'botbuilder';

function lambda(connector: builder.ChatConnector) {
    let listener: Function = connector.listen();

    let handler = (event: any, context: any, callback: any) => {
        let reqWrapper = {
            body: JSON.parse(event.body),
            headers: event.headers
        };

        let statusCode: number;
        let resWrapper = {
            status: (code: number) => {
                statusCode = code;
            },
            end: () => {
                // TODO deal with error cases
                callback(null, {statusCode: statusCode});
            }
        };

        listener(reqWrapper, resWrapper);
    };

    return handler;
}

module.exports = lambda;
