var Promise = require('promise');

module.exports = {
    validate: function(sdk, args) {
        return new Promise(function(resolve, reject) {
            sdk.validate(args, function(result, err) {
                resolve(result, err)
            });
        });
    },

    forms: function(sdk, args) {
        return new Promise(function(resolve, reject) {
            sdk.forms(args, function(result, err) {
                resolve(result, err)
            });
        });
    }


}
