// Example usage for ESM
import registerSignals from './index.mjs';
const { shutdown, getShuttingDown } = registerSignals();

console.log('Shutdown handlers registered.');

// To manually trigger shutdown (for demonstration):
// shutdown('SIGTERM');
