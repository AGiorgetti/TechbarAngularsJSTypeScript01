/**
 * This is just a sample file to test if the TypeScript compiler work!
 */

interface ILogger {
    log(message: string): void;
}

class SampleLogger implements ILogger {

    /**
     * will be transpiled to a prototype function
     */
    log(message: string): void {
        console.log(message);
    }

    /**
     * will be transpiled to a member function
     */
    log2 = (message: string): void => {
        console.log(message);
    };
}

let logger = new SampleLogger();
logger.log("log message");