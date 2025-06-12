# @purinton/signals

[![npm version](https://img.shields.io/npm/v/@purinton/signals.svg)](https://www.npmjs.com/package/@purinton/signals)
[![license](https://img.shields.io/github/license/purinton/signals.svg)](LICENSE)
[![build status](https://github.com/purinton/signals/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/signals/actions)

> Graceful shutdown signal handler utility for Node.js (ESM and CommonJS)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ESM Example](#esm-example)
  - [CommonJS Example](#commonjs-example)
- [API](#api)
  - [registerSignals(options?)](#registersignalsoptions)
- [TypeScript](#typescript)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**@purinton/signals** is a lightweight utility for registering graceful shutdown handlers in Node.js applications. It supports both ESM and CommonJS, and allows you to easily handle process signals like `SIGTERM`, `SIGINT`, and `SIGHUP` with a customizable logger and process object.

---

## Features

- Register handlers for process signals (e.g., `SIGTERM`, `SIGINT`, `SIGHUP`)
- Customizable logger and process object
- Simple API for both ESM and CommonJS
- TypeScript type definitions included
- Well-tested with Jest

---

## Installation

```bash
npm install @purinton/signals
```

---

## Usage

### ESM Example

```js
import { registerSignals } from '@purinton/signals';

const { shutdown, getShuttingDown } = registerSignals();

console.log('Shutdown handlers registered.');

// To manually trigger shutdown (for demonstration):
// shutdown('SIGTERM');
```

### CommonJS Example

```js
const registerSignals = require('@purinton/signals');

const { shutdown, getShuttingDown } = registerSignals();

console.log('Shutdown handlers registered.');

// To manually trigger shutdown (for demonstration):
// shutdown('SIGTERM');
```

---

## API

### `registerSignals(options?)`

Registers shutdown handlers for the specified signals.

#### Options

- `processObj` (default: `process`): The process object to attach handlers to.
- `logger` (default: `@purinton/log`): Logger for output. Should have `info`, `warn`, and `error` methods.
- `signals` (default: `[ 'SIGTERM', 'SIGINT', 'SIGHUP' ]`): Array of signals to listen for.

#### Returns

An object with:

- `shutdown(signal: string): Promise<void>` — Manually trigger shutdown logic.
- `getShuttingDown(): boolean` — Returns whether shutdown is in progress.

---

## TypeScript

Type definitions are included. Example:

```ts
import { registerSignals } from '@purinton/signals';

const { shutdown, getShuttingDown } = registerSignals();
```

---

## Testing

This package uses [Jest](https://jestjs.io/) for testing. To run tests:

```bash
npm test
```

---

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/purinton/signals/issues).

---

## License

MIT License  
Copyright (c) 2025 Russell Purinton
