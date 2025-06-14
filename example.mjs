// Example usage for ESM
import log from '@purinton/log';
import registerSignals from '@purinton/signals';
const { shutdown, getShuttingDown } = registerSignals({ log });