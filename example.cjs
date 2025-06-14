// Example usage for CommonJS
const log = require('@purinton/log');
const registerSignals = require('@purinton/signals');
const { shutdown, getShuttingDown } = registerSignals({ log });
