const util = require('util');

exports.on = {
    any: (type, msg) => { },
    debug: (msg) => {
        process.stdout.write('\n ' + '[DEBUG]' + ' ' + msg + '\n');
    },
    notice: (msg) => {
        process.stdout.write('\n ' + '[INFO]' + ' ' + msg + '\n');
    },
    warning: (msg) => {
        process.stdout.write('\n ' + '[WARNI]' + ' ' + msg + '\n');
    },
    error: (msg) => {
        process.stdout.write('\n ' + '[ERROR]' + ' ' + msg + '\n');
    }
};

exports.info = function (msg) {
    msg = util.format.apply(util, arguments);
    log('notice', msg);
};

exports.warning = function (msg) {
    msg = util.format.apply(util, arguments);
    log('warning', msg);
}

exports.error = function (err) {
    if (!(err instanceof Error)) {
        err.message && (err = err.message);
        err = new Error(err.message || util.format.apply(util, arguments));
    }

    if (exports.alert) {
        err.message += '\u0007';
    }
    if (exports.throw) {
        throw err
    } else {
        log('error', err.message);
        process.exit(1);
    }
};

function log(type, msg) {
    const listener = exports.on[type];
    if (listener) {
        listener(msg);
    }
    exports.on.any(type, msg);
}