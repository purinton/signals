# [![Purinton Dev](https://purinton.us/logos/brand.png)](https://discord.gg/QSBxQnX7PF)

## @purinton/signals [![npm version](https://img.shields.io/npm/v/@purinton/signals.svg)](https://www.npmjs.com/package/@purinton/signals)[![license](https://img.shields.io/github/license/purinton/signals.svg)](LICENSE)[![build status](https://github.com/purinton/signals/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/signals/actions)

> Graceful shutdown signal handler utility for Node.js (ESM and CommonJS)

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ESM Example](#esm-example)
  - [CommonJS Example](#commonjs-example)
- [API](#api)
- [TypeScript](#typescript)
- [License](#license)

## Features

- Register handlers for process signals (e.g., `SIGTERM`, `SIGINT`, `SIGHUP`)
- Customizable logger and process object
- Simple API for both ESM and CommonJS
- TypeScript type definitions included
- Well-tested with Jest

## Installation

```bash
npm install @purinton/signals
```

## Usage

### ESM Example

```js
// Example for ESM (module JS) usage
import registerSignalsDefault, { registerSignals } from '@purinton/signals';

// Both default and named export are available:
const { shutdown, getShuttingDown } = registerSignals();
// or
const { shutdown: shutdown2, getShuttingDown: getShuttingDown2 } = registerSignalsDefault();

console.log('Shutdown handlers registered.');
// To manually trigger shutdown (for demonstration):
// shutdown('SIGTERM');
```

### CommonJS Example

```js
// Example for CommonJS usage
const registerSignalsModule = require('@purinton/signals');

// Both default and named export are available:
const { shutdown, getShuttingDown } = registerSignalsModule();
// or
const { shutdown: shutdown2, getShuttingDown: getShuttingDown2 } = registerSignalsModule.default();

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

## TypeScript

Type definitions are included:

```ts
import registerSignalsDefault, { registerSignals } from '@purinton/signals';

const { shutdown, getShuttingDown } = registerSignals();
// or
const { shutdown: shutdown2, getShuttingDown: getShuttingDown2 } = registerSignalsDefault();
```

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://purinton.us/logos/discord_96.png)](https://discord.gg/QSBxQnX7PF)[![Purinton Dev](https://purinton.us/logos/purinton_96.png)](https://discord.gg/QSBxQnX7PF)

**[Purinton Dev on Discord](https://discord.gg/QSBxQnX7PF)**

## License

[MIT © 2025 Russell Purinton](LICENSE)

## Links

- [GitHub](https://github.com/purinton/signals)
- [npm](https://www.npmjs.com/package/@purinton/signals)
- [Discord](https://discord.gg/QSBxQnX7PF)
