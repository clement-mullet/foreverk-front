export class utilsHandler {
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}