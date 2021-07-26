"use strict";

module.exports.hello = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless Whats in my fridge executed successfully!",
                input: event,
            },
            null,
            2
        ),
    };
};
