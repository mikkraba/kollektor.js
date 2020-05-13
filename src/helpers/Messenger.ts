

export class Messenger {
    public static instance: Messenger;
    private isDebug: boolean;
    private constructor(isDebug: boolean) {this.isDebug = isDebug}

    public static getInstance(isDebug: boolean): Messenger {

        if (!Messenger.instance) {
            Messenger.instance = new Messenger(isDebug);
        }

        return Messenger.instance;
    }

    /**
     * Log a message to console.
     * 
     * @param message 
     */
    public log(message: string | object): void {
        if (!this.isDebug) return;
        console.log(message);
    }

    /**
     * Log an error message to console.
     * 
     * @param message 
     */
    public error(message?: string | object): void {
        if (!this.isDebug) return;
        const m = message ? message : "Unknown error";
        console.error(m);
    }
}