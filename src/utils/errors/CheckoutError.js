export class CheckoutError extends Error {
    constructor(message, errorCode, details) {
        super(message);

        this.errorCode = errorCode;
        this.details = details || null;
    }
}
