const logger = require('@purinton/log');

/**
 * Sets up shutdown handlers for the process.
 * @param {Object} options
 * @param {Object} [options.processObj=process] - The process object to attach handlers to.
 * @param {Object} [options.log=logger] - Logger for output.
 * @param {string[]} [options.signals=['SIGTERM', 'SIGINT', 'SIGHUP']] - Signals to listen for.
 * @returns {Object} { shutdown, getShuttingDown }
 */
function registerSignals({
    processObj = process,
    log = logger,
    signals = ['SIGTERM', 'SIGINT', 'SIGHUP']
} = {}) {
    let shuttingDown = false;
    const getShuttingDown = () => shuttingDown;
    const shutdown = async (signal) => {
        if (shuttingDown) {
            log.warn(`Received ${signal} again, but already shutting down.`);
            return;
        }
        shuttingDown = true;
        log.debug(`Received ${signal}. Shutting down gracefully...`);
        try {
            // Place for any async cleanup logic if needed
        } catch (err) {
            log.error('Error during shutdown:', err);
        }
        processObj.exit(0);
    };
    signals.forEach(signal => {
        processObj.on(signal, () => shutdown(signal));
    });
    log.debug('Registered Handlers', { signals: signals.join(', ') });
    return { shutdown, getShuttingDown };
}

module.exports = registerSignals;
module.exports.default = registerSignals;
module.exports.registerSignals = registerSignals;
