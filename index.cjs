const log = require('@purinton/log');

/**
 * Sets up shutdown handlers for the process.
 * @param {Object} options
 * @param {Object} [options.processObj=process] - The process object to attach handlers to.
 * @param {Object} [options.logger=log] - Logger for output.
 * @param {string[]} [options.signals=['SIGTERM', 'SIGINT', 'SIGHUP']] - Signals to listen for.
 * @returns {Object} { shutdown, getShuttingDown }
 */
function registerSignals({
    processObj = process,
    logger = log,
    signals = ['SIGTERM', 'SIGINT', 'SIGHUP']
} = {}) {
    let shuttingDown = false;
    const getShuttingDown = () => shuttingDown;
    const shutdown = async (signal) => {
        if (shuttingDown) {
            logger.warn(`Received ${signal} again, but already shutting down.`);
            return;
        }
        shuttingDown = true;
        logger.debug(`Received ${signal}. Shutting down gracefully...`);
        try {
            // Place for any async cleanup logic if needed
        } catch (err) {
            logger.error('Error during shutdown:', err);
        }
        processObj.exit(0);
    };
    signals.forEach(signal => {
        processObj.on(signal, () => shutdown(signal));
    });
    return { shutdown, getShuttingDown };
}

module.exports = registerSignals;
module.exports.default = registerSignals;
module.exports.registerSignals = registerSignals;
