// Example usage for CommonJS
const registerSignals = require('./index.cjs');
const { shutdown, getShuttingDown } = registerSignals();
console.log('Shutdown handlers registered.');
// To manually trigger shutdown (for demonstration):
// shutdown('SIGTERM');
