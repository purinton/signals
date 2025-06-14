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
import log from '@purinton/log';
import registerSignals from '@purinton/signals'; // Default export
// or: import { registerSignals } from '@purinton/signals';
const { shutdown, getShuttingDown } = registerSignals({ log });
```

### CommonJS Example

```js
const log = require('@purinton/log');
const registerSignals = require('@purinton/signals'); // Default export
// or: const { registerSignals } = require('@purinton/signals');
const { shutdown, getShuttingDown } = registerSignals({ log });
```

> **Note:** Both the default export and named export `registerSignals` are available in both ESM and CommonJS.

## API

### registerSignals(options?)

Registers shutdown handlers for the specified signals.

#### Options

- `processObj` (default: `process`): The process object to attach handlers to.
- `log` (default: `@purinton/log`): Logger for output. Should have `debug`, `info`, `warn`, and `error` methods.
- `signals` (default: `[ 'SIGTERM', 'SIGINT', 'SIGHUP' ]`): Array of signals to listen for.

#### Returns

An object with:

- `shutdown(signal: string): Promise<void>` — Manually trigger shutdown logic.
- `getShuttingDown(): boolean` — Returns whether shutdown is in progress.

## TypeScript

Type definitions are included:

```ts
import registerSignals, { RegisterSignalsOptions } from '@purinton/signals';

// Optionally provide options
const options: RegisterSignalsOptions = {
  processObj: process, // optional, defaults to process
  log: myLogger,       // optional, defaults to @purinton/log
  signals: ['SIGTERM', 'SIGINT', 'SIGHUP'] // optional, defaults as shown
};

const { shutdown, getShuttingDown } = registerSignals(options);

// Types:
// interface RegisterSignalsOptions {
//   processObj?: NodeJS.Process;
//   log?: typeof log;
//   signals?: string[];
// }
//
// function registerSignals(options?: RegisterSignalsOptions): {
//   shutdown: (signal: string) => Promise<void>;
//   getShuttingDown: () => boolean;
// };
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
