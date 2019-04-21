'use strict';

const request = require('request-promise').defaults({ encoding: null });

module.exports = {
    predict: predict
}

function predict(stream) {
    const options = {
        method: 'POST',
        url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/609659f2-eacc-4e38-83c1-97d4c328ac17/classify/iterations/Iteration1/image',
        headers: {
            'Content-Type': 'application/octet-stream',
            'Prediction-Key': '7baedecb0944476e996825e336d9d804'
        },
        body: stream
    };

    return request(options);
}