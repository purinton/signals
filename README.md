# signals

A simple utility to register graceful shutdown handlers for Node.js processes, supporting both ESM and CommonJS.

## Features

- Register handlers for process signals (e.g., SIGTERM, SIGINT, SIGHUP)
- Customizable logger and process object
- Simple API for both ESM and CJS

## Installation

```bash
npm install @purinton/signals
```

## Usage

### ESM Example

```js
import { registerSignals } from './index.mjs';

const { shutdown, getShuttingDown } = registerSignals();

console.log('Shutdown handlers registered.');

// To manually trigger shutdown (for demonstration):
// shutdown('SIGTERM');
```

### CommonJS Example

```js
const registerSignals = require('./index.cjs');

const { shutdown, getShuttingDown } = registerSignals();

console.log('Shutdown handlers registered.');

// To manually trigger shutdown (for demonstration):
// shutdown('SIGTERM');
```

## API

### registerSignals(options?)

Registers shutdown handlers for the specified signals.

#### Options

- `processObj` (default: `process`): The process object to attach handlers to.
- `logger` (default: `@purinton/log`): Logger for output. Should have `info`, `warn`, and `error` methods.
- `signals` (default: `[ 'SIGTERM', 'SIGINT', 'SIGHUP' ]`): Array of signals to listen for.

#### Returns

An object with:

- `shutdown(signal: string): Promise<void>` — Manually trigger shutdown logic.
- `getShuttingDown(): boolean` — Returns whether shutdown is in progress.

## License

MIT
