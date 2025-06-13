// Type declarations for signals

/**
 * Sets up shutdown handlers for the process.
 * @param options Options for shutdown handler setup.
 * @param options.processObj The process object to attach handlers to.
 * @param options.logger Logger for output.
 * @param options.signals Signals to listen for.
 * @returns An object with shutdown and getShuttingDown functions.
 */
export interface RegisterSignalsOptions {
    processObj?: NodeJS.Process;
    logger?: { info: Function; warn: Function; error: Function };
    signals?: string[];
}

export function registerSignals(options?: RegisterSignalsOptions): {
    shutdown: (signal: string) => Promise<void>;
    getShuttingDown: () => boolean;
};

export default registerSignals;
