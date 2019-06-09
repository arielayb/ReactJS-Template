'use strict';

require('whatwg-fetch');

var testUtils = {

    send: function(indexData)
    {
        return fetch('/api/load',
        {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ index: indexData}),
            credentials: 'same-origin'
        });
    },

    recv: function(indexData)
    {
        return fetch('/api/recv',
        {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify({ index: index}),
            credentials: 'same-origin'
        });
    }

    // clear: function()
    // {
    //     return fetch('/api/clear',
    //     {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         credentials: 'same-origin'
    //     });
    // }
};

module.exports = testUtils;
