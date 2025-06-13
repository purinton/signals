import registerSignalsDefault, { registerSignals as registerSignalsNamed } from './index.mjs';
import { jest, test, expect, beforeEach, describe } from '@jest/globals';

describe('registerSignals (ESM)', () => {
  let mockProcess;
  let mockLogger;
  beforeEach(() => {
    mockProcess = {
      on: jest.fn(),
      exit: jest.fn()
    };
    mockLogger = {
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn()
    };
  });

  test('registers signal handlers (named export)', () => {
    registerSignalsNamed({ processObj: mockProcess, logger: mockLogger });
    expect(mockProcess.on).toHaveBeenCalledWith('SIGTERM', expect.any(Function));
    expect(mockProcess.on).toHaveBeenCalledWith('SIGINT', expect.any(Function));
    expect(mockProcess.on).toHaveBeenCalledWith('SIGHUP', expect.any(Function));
  });

  test('registers signal handlers (default export)', () => {
    registerSignalsDefault({ processObj: mockProcess, logger: mockLogger });
    expect(mockProcess.on).toHaveBeenCalledWith('SIGTERM', expect.any(Function));
    expect(mockProcess.on).toHaveBeenCalledWith('SIGINT', expect.any(Function));
    expect(mockProcess.on).toHaveBeenCalledWith('SIGHUP', expect.any(Function));
  });

  test('shutdown sets shuttingDown and calls exit (named export)', async () => {
    const { shutdown, getShuttingDown } = registerSignalsNamed({ processObj: mockProcess, logger: mockLogger });
    expect(getShuttingDown()).toBe(false);
    await shutdown('SIGTERM');
    expect(getShuttingDown()).toBe(true);
    expect(mockLogger.info).toHaveBeenCalledWith('Received SIGTERM. Shutting down gracefully...');
    expect(mockProcess.exit).toHaveBeenCalledWith(0);
  });

  test('shutdown sets shuttingDown and calls exit (default export)', async () => {
    const { shutdown, getShuttingDown } = registerSignalsDefault({ processObj: mockProcess, logger: mockLogger });
    expect(getShuttingDown()).toBe(false);
    await shutdown('SIGTERM');
    expect(getShuttingDown()).toBe(true);
    expect(mockLogger.info).toHaveBeenCalledWith('Received SIGTERM. Shutting down gracefully...');
    expect(mockProcess.exit).toHaveBeenCalledWith(0);
  });

  test('shutdown warns if already shutting down (named export)', async () => {
    const { shutdown } = registerSignalsNamed({ processObj: mockProcess, logger: mockLogger });
    await shutdown('SIGTERM');
    await shutdown('SIGTERM');
    expect(mockLogger.warn).toHaveBeenCalledWith('Received SIGTERM again, but already shutting down.');
  });

  test('shutdown warns if already shutting down (default export)', async () => {
    const { shutdown } = registerSignalsDefault({ processObj: mockProcess, logger: mockLogger });
    await shutdown('SIGTERM');
    await shutdown('SIGTERM');
    expect(mockLogger.warn).toHaveBeenCalledWith('Received SIGTERM again, but already shutting down.');
  });
});
