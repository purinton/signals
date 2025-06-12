import { registerSignals } from './index.mjs';
import { jest, test, expect, beforeEach } from '@jest/globals';

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

  test('registers signal handlers', () => {
    registerSignals({ processObj: mockProcess, logger: mockLogger });
    expect(mockProcess.on).toHaveBeenCalledWith('SIGTERM', expect.any(Function));
    expect(mockProcess.on).toHaveBeenCalledWith('SIGINT', expect.any(Function));
    expect(mockProcess.on).toHaveBeenCalledWith('SIGHUP', expect.any(Function));
  });

  test('shutdown sets shuttingDown and calls exit', async () => {
    const { shutdown, getShuttingDown } = registerSignals({ processObj: mockProcess, logger: mockLogger });
    expect(getShuttingDown()).toBe(false);
    await shutdown('SIGTERM');
    expect(getShuttingDown()).toBe(true);
    expect(mockLogger.info).toHaveBeenCalledWith('Received SIGTERM. Shutting down gracefully...');
    expect(mockProcess.exit).toHaveBeenCalledWith(0);
  });

  test('shutdown warns if already shutting down', async () => {
    const { shutdown } = registerSignals({ processObj: mockProcess, logger: mockLogger });
    await shutdown('SIGTERM');
    await shutdown('SIGTERM');
    expect(mockLogger.warn).toHaveBeenCalledWith('Received SIGTERM again, but already shutting down.');
  });
});
