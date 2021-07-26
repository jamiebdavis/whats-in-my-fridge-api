"use strict";

module.exports.fetchItems = async event => {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(
            {
                message: ["Eggs", "Chicken", "Prawns"],
                input: event,
            },
            null,
            2
        ),
    };
};
